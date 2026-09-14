class DigitalClock {
    constructor() {
        this.clocksData = [];
        this.timeFormat = '12'; // Default 12-hour format
        this.updateInterval = null;
        this.init();
    }

    init() {
        this.loadLocalStorage();
        this.setupEventListeners();
        this.populateTimezoneSelect();
        this.renderClocks();
        this.startUpdating();
    }

    setupEventListeners() {
        const formatSelect = document.getElementById('timeFormat');
        const addBtn = document.getElementById('addBtn');

        formatSelect.addEventListener('change', (e) => {
            this.timeFormat = e.target.value;
            this.renderClocks();
        });

        addBtn.addEventListener('click', () => this.addClock());

        const timezoneSelect = document.getElementById('timezoneSelect');
        timezoneSelect.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addClock();
        });
    }

    populateTimezoneSelect() {
        const select = document.getElementById('timezoneSelect');
        const timezones = window.TIMEZONES || [];
        
        timezones.forEach(tz => {
            const option = document.createElement('option');
            option.value = tz.timezone;
            option.textContent = `${tz.label}`;
            select.appendChild(option);
        });
    }

    addClock() {
        const select = document.getElementById('timezoneSelect');
        const timezone = select.value;

        if (!timezone) {
            alert('Please select a timezone');
            return;
        }

        // Check if timezone already exists
        if (this.clocksData.some(c => c.timezone === timezone)) {
            alert('This timezone is already added');
            return;
        }

        const timezones = window.TIMEZONES || [];
        const tzData = timezones.find(t => t.timezone === timezone);

        if (tzData) {
            this.clocksData.push({
                timezone: timezone,
                label: tzData.label,
                offset: tzData.offset,
                isLocal: false
            });

            this.saveLocalStorage();
            this.renderClocks();
            select.value = '';
        }
    }

    removeClock(timezone) {
        this.clocksData = this.clocksData.filter(c => c.timezone !== timezone);
        this.saveLocalStorage();
        this.renderClocks();
    }

    saveLocalStorage() {
        const data = this.clocksData.filter(c => !c.isLocal).map(c => ({
            timezone: c.timezone,
            label: c.label,
            offset: c.offset
        }));
        localStorage.setItem('clocksData', JSON.stringify(data));
    }

    loadLocalStorage() {
        // Add local timezone
        this.clocksData = [{
            timezone: 'Local',
            label: this.getLocalTimezoneLabel(),
            offset: 0,
            isLocal: true
        }];

        // Load saved timezones
        const saved = localStorage.getItem('clocksData');
        if (saved) {
            try {
                const data = JSON.parse(saved);
                this.clocksData.push(...data);
            } catch (e) {
                console.error('Error loading saved clocks:', e);
            }
        }
    }

    getLocalTimezoneLabel() {
        try {
            const formatter = new Intl.DateTimeFormat('en-US', {
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
            return Intl.DateTimeFormat().resolvedOptions().timeZone;
        } catch (e) {
            return 'Local Time';
        }
    }

    getCurrentTime(timezone) {
        const now = new Date();
        
        if (timezone === 'Local') {
            return now;
        }

        try {
            const formatter = new Intl.DateTimeFormat('en-US', {
                timeZone: timezone,
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            });

            const parts = formatter.formatToParts(now);
            const values = {};
            parts.forEach(part => {
                values[part.type] = part.value;
            });

            return new Date(
                `${values.year}-${values.month}-${values.day}T${values.hour}:${values.minute}:${values.second}Z`
            );
        } catch (e) {
            return now;
        }
    }

    formatTime(date, format) {
        const hours24 = date.getHours().toString().padStart(2, '0');
        const hours12 = (date.getHours() % 12 || 12).toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

        if (format === '24') {
            return `${hours24}:${minutes}:${seconds}`;
        } else {
            return `${hours12}:${minutes}:${seconds} ${ampm}`;
        }
    }

    getTimeDetails(date) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June',
                       'July', 'August', 'September', 'October', 'November', 'December'];

        return {
            day: days[date.getDay()],
            date: `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`,
            week: `Week ${Math.ceil((date.getDate() + new Date(date.getFullYear(), date.getMonth(), 1).getDay()) / 7)}`
        };
    }

    renderClocks() {
        const grid = document.getElementById('clocksGrid');
        grid.innerHTML = '';

        if (this.clocksData.length === 0) {
            grid.innerHTML = '<div class="empty-state"><h2>No clocks added</h2><p>Add a timezone to get started</p></div>';
            return;
        }

        this.clocksData.forEach(clockData => {
            const time = this.getCurrentTime(clockData.timezone);
            const details = this.getTimeDetails(time);
            const formattedTime = this.formatTime(time, this.timeFormat);

            const card = document.createElement('div');
            card.className = `clock-card ${clockData.isLocal ? 'local' : ''}`;

            card.innerHTML = `
                <div class="timezone-name">${clockData.label}</div>
                <div class="timezone-label">${clockData.isLocal ? 'Your Local Time' : clockData.timezone}</div>
                <div class="digital-display">${formattedTime}</div>
                <div class="time-details">
                    <div class="detail-item">
                        <div class="detail-label">Day</div>
                        <div class="detail-value">${details.day}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Date</div>
                        <div class="detail-value">${details.date}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Week</div>
                        <div class="detail-value">${details.week}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Seconds</div>
                        <div class="detail-value">${time.getSeconds().toString().padStart(2, '0')}</div>
                    </div>
                </div>
                ${clockData.isLocal ? '<span class="badge">Your Location</span>' : '<span class="badge utc">UTC+' + (clockData.offset >= 0 ? clockData.offset : clockData.offset.toString().replace('-', '')) + '</span>'}
                ${!clockData.isLocal ? `<button class="remove-btn" onclick="clock.removeClock('${clockData.timezone}')">Remove</button>` : ''}
            `;

            grid.appendChild(card);
        });
    }

    startUpdating() {
        if (this.updateInterval) clearInterval(this.updateInterval);
        this.renderClocks();
        this.updateInterval = setInterval(() => this.renderClocks(), 1000);
    }

    destroy() {
        if (this.updateInterval) clearInterval(this.updateInterval);
    }
}

// Initialize clock when DOM is ready
let clock;
document.addEventListener('DOMContentLoaded', () => {
    clock = new DigitalClock();
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (clock) clock.destroy();
});
