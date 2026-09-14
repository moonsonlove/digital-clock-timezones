# 🕐 Digital Clock - Multiple Time Zones

A beautiful, responsive digital clock application that displays the current time across different time zones around the world. Built with vanilla HTML, CSS, and JavaScript.

## Features

✨ **Multi-Timezone Support**
- Display multiple time zones simultaneously
- Add or remove time zones on demand
- Automatically shows your local time

⏰ **Time Display Options**
- 12-hour format (AM/PM)
- 24-hour format
- Real-time updates (every second)
- Digital display with glowing effect

📊 **Detailed Time Information**
- Current time with seconds
- Day of the week
- Date (DD/MM/YYYY)
- Week number of the year
- UTC offset information

💾 **Persistent Storage**
- Saves your selected time zones to browser storage
- Automatically restores on page reload
- No server required

🎨 **Modern UI**
- Dark theme with vibrant gradient accents
- Smooth animations and transitions
- Responsive design (mobile, tablet, desktop)
- Hover effects and visual feedback

🔧 **User-Friendly**
- Intuitive timezone selector
- One-click timezone removal
- Clean, organized layout
- Search-friendly timezone names

## Usage

### Local Setup

1. Clone the repository:
```bash
git clone https://github.com/moonsonlove/digital-clock-timezones.git
cd digital-clock-timezones
```

2. Open `index.html` in your web browser:
```bash
# On Windows
start index.html

# On macOS
open index.html

# On Linux
xdg-open index.html
```

Or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (http-server)
npx http-server
```

Then navigate to `http://localhost:8000` in your browser.

### Using the Clock

1. **Change Time Format**: Use the dropdown in the controls to switch between 12-hour and 24-hour format

2. **Add a Timezone**:
   - Select a timezone from the "Add Timezone" dropdown
   - Click the "Add" button
   - The clock will appear in the grid

3. **Remove a Timezone**:
   - Click the "Remove" button on the clock card
   - The timezone will be deleted

4. **View Details**:
   - Each clock shows:
     - Timezone name
     - Current time with seconds
     - Day of the week
     - Date
     - Week number
     - UTC offset (for non-local times)

## Supported Timezones

The application includes 80+ timezones across:

- **Africa**: Cairo, Johannesburg, Lagos, Nairobi, and more
- **Americas**: New York, Chicago, Denver, Los Angeles, Toronto, São Paulo, and more
- **Asia**: Tokyo, Shanghai, Hong Kong, Bangkok, Dubai, Kolkata, and more
- **Europe**: London, Paris, Berlin, Rome, Madrid, Moscow, and more
- **Oceania**: Sydney, Melbourne, Auckland, Fiji, and more
- **Atlantic**: Azores, Bermuda, Reykjavik, and more
- **UTC/GMT**: Standard reference times

## File Structure

```
digital-clock-timezones/
├── index.html          # Main HTML structure
├── styles.css          # Styling and animations
├── script.js           # Clock logic and DOM manipulation
├── timezones.js        # Timezone database
└── README.md           # This file
```

## Technical Details

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling, flexbox, grid, gradients, and animations
- **Vanilla JavaScript**: No dependencies, pure DOM manipulation

### Key Classes

#### DigitalClock
Main class handling all clock functionality:

```javascript
const clock = new DigitalClock();

// Methods:
clock.addClock()           // Add a new timezone
clock.removeClock(tz)      // Remove a timezone
clock.renderClocks()       // Render all clocks
clock.getCurrentTime(tz)   // Get time for specific timezone
clock.formatTime(date, fmt) // Format time based on 12/24 hour
```

### Local Storage
The app saves timezone selections to `localStorage` under the key `clocksData`:

```javascript
// Saved format
[
  { timezone: 'America/New_York', label: 'America/New_York (EST/EDT)', offset: -5 },
  { timezone: 'Asia/Tokyo', label: 'Asia/Tokyo', offset: 9 }
]
```

## Browser Compatibility

✅ **Chrome** 60+
✅ **Firefox** 55+
✅ **Safari** 12+
✅ **Edge** 79+
✅ **Opera** 47+

## Performance

- Updates every 1 second for real-time accuracy
- Efficient DOM updates (only re-renders when needed)
- Minimal memory footprint
- No external dependencies (loads instantly)
- Optimized CSS with no layout thrashing

## Customization

### Add Custom Timezone

Edit `timezones.js` to add new timezones:

```javascript
const TIMEZONES = [
    // ... existing timezones ...
    { label: 'Custom/Timezone', timezone: 'Custom/Timezone', offset: 5 },
];
```

### Change Color Scheme

Modify CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;        /* Main accent color */
    --secondary-color: #ec4899;      /* Gradient color */
    --dark-bg: #0f172a;              /* Background */
    --card-bg: #1e293b;              /* Card background */
    --text-primary: #f1f5f9;          /* Primary text */
    --text-secondary: #cbd5e1;        /* Secondary text */
}
```

### Adjust Update Frequency

Change the update interval in `script.js`:

```javascript
// Default: 1000ms (1 second)
this.updateInterval = setInterval(() => this.renderClocks(), 1000);

// Change to 500ms for faster updates
this.updateInterval = setInterval(() => this.renderClocks(), 500);
```

## API Reference

### TIMEZONES Array

```javascript
{
    label: string,        // Display name (e.g., 'Asia/Tokyo')
    timezone: string,     // IANA timezone identifier
    offset: number        // UTC offset in hours
}
```

### DigitalClock Methods

#### `init()`
Initialize the clock application.

#### `addClock()`
Add a new timezone clock to the display.

#### `removeClock(timezone)`
- `timezone` (string): IANA timezone identifier
- Removes the timezone from display and storage

#### `getCurrentTime(timezone)`
- `timezone` (string): IANA timezone identifier
- Returns: Date object adjusted to specified timezone

#### `formatTime(date, format)`
- `date` (Date): Date object to format
- `format` (string): '12' or '24' hour format
- Returns: Formatted time string

#### `getTimeDetails(date)`
- `date` (Date): Date object
- Returns: Object with day, date, and week information

#### `renderClocks()`
Render all active clocks to the DOM.

#### `startUpdating()`
Start the update interval (1 second).

#### `destroy()`
Cleanup: clear update interval.

## Troubleshooting

### Clocks not updating
- Check browser console for errors
- Ensure JavaScript is enabled
- Try refreshing the page
- Clear browser cache and reload

### Timezone not found
- Verify timezone name is correct (case-sensitive)
- Use IANA timezone identifiers (e.g., 'Asia/Tokyo' not 'JST')
- Check `timezones.js` for available timezones

### Storage not persisting
- Check if browser allows localStorage
- Ensure cookies/storage is enabled
- Check browser privacy settings
- Try incognito/private mode

### Time shows incorrectly
- Verify system time is correct
- Check browser timezone settings
- Clear browser cache
- Use developer console to check: `new Date().toString()`

## Future Enhancements

- 🌍 Add more timezone search functionality
- 📱 Progressive Web App (PWA) support
- 🎨 Additional theme options (light mode, custom colors)
- 🔔 Alarm/reminder functionality
- 📊 Sunrise/sunset times per timezone
- 🗣️ Different language support
- 📡 Weather information per timezone
- ⌨️ Keyboard shortcuts

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

If you encounter issues or have suggestions:

1. Check existing issues on GitHub
2. Create a new issue with detailed description
3. Include browser and OS information
4. Provide steps to reproduce the problem

## Author

Created by moonsonlove

## Acknowledgments

- IANA Time Zone Database for timezone information
- Inspired by world clock applications
- Built with ❤️ using vanilla web technologies

---

**Made with ❤️ for global teams and timezone enthusiasts**
