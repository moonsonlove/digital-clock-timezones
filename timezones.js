// Comprehensive timezone data
const TIMEZONES = [
    // UTC and GMT
    { label: 'UTC (Coordinated Universal Time)', timezone: 'UTC', offset: 0 },
    { label: 'GMT (Greenwich Mean Time)', timezone: 'GMT', offset: 0 },

    // Africa
    { label: 'Africa/Cairo', timezone: 'Africa/Cairo', offset: 2 },
    { label: 'Africa/Johannesburg', timezone: 'Africa/Johannesburg', offset: 2 },
    { label: 'Africa/Lagos', timezone: 'Africa/Lagos', offset: 1 },
    { label: 'Africa/Nairobi', timezone: 'Africa/Nairobi', offset: 3 },
    { label: 'Africa/Casablanca', timezone: 'Africa/Casablanca', offset: 0 },
    { label: 'Africa/Addis_Ababa', timezone: 'Africa/Addis_Ababa', offset: 3 },
    { label: 'Africa/Accra', timezone: 'Africa/Accra', offset: 0 },
    { label: 'Africa/Algiers', timezone: 'Africa/Algiers', offset: 1 },
    { label: 'Africa/Khartoum', timezone: 'Africa/Khartoum', offset: 2 },
    { label: 'Africa/Tunis', timezone: 'Africa/Tunis', offset: 1 },

    // Americas - North America
    { label: 'America/New_York (EST/EDT)', timezone: 'America/New_York', offset: -5 },
    { label: 'America/Chicago (CST/CDT)', timezone: 'America/Chicago', offset: -6 },
    { label: 'America/Denver (MST/MDT)', timezone: 'America/Denver', offset: -7 },
    { label: 'America/Los_Angeles (PST/PDT)', timezone: 'America/Los_Angeles', offset: -8 },
    { label: 'America/Anchorage (AKST/AKDT)', timezone: 'America/Anchorage', offset: -9 },
    { label: 'Pacific/Honolulu (HST)', timezone: 'Pacific/Honolulu', offset: -10 },
    { label: 'America/Toronto (EST/EDT)', timezone: 'America/Toronto', offset: -5 },
    { label: 'America/Vancouver (PST/PDT)', timezone: 'America/Vancouver', offset: -8 },
    { label: 'America/Mexico_City', timezone: 'America/Mexico_City', offset: -6 },

    // Americas - South America
    { label: 'America/Sao_Paulo (BRT/BRST)', timezone: 'America/Sao_Paulo', offset: -3 },
    { label: 'America/Buenos_Aires', timezone: 'America/Buenos_Aires', offset: -3 },
    { label: 'America/Bogota', timezone: 'America/Bogota', offset: -5 },
    { label: 'America/Lima', timezone: 'America/Lima', offset: -5 },
    { label: 'America/Santiago', timezone: 'America/Santiago', offset: -3 },
    { label: 'America/Caracas', timezone: 'America/Caracas', offset: -4 },

    // Atlantic
    { label: 'Atlantic/Azores', timezone: 'Atlantic/Azores', offset: -1 },
    { label: 'Atlantic/Bermuda', timezone: 'Atlantic/Bermuda', offset: -4 },
    { label: 'Atlantic/Canary', timezone: 'Atlantic/Canary', offset: 0 },
    { label: 'Atlantic/Cape_Verde', timezone: 'Atlantic/Cape_Verde', offset: -1 },
    { label: 'Atlantic/Reykjavik', timezone: 'Atlantic/Reykjavik', offset: 0 },
    { label: 'Atlantic/South_Georgia', timezone: 'Atlantic/South_Georgia', offset: -2 },

    // Asia - Southeast
    { label: 'Asia/Bangkok', timezone: 'Asia/Bangkok', offset: 7 },
    { label: 'Asia/Ho_Chi_Minh', timezone: 'Asia/Ho_Chi_Minh', offset: 7 },
    { label: 'Asia/Jakarta', timezone: 'Asia/Jakarta', offset: 7 },
    { label: 'Asia/Kuala_Lumpur', timezone: 'Asia/Kuala_Lumpur', offset: 8 },
    { label: 'Asia/Manila', timezone: 'Asia/Manila', offset: 8 },
    { label: 'Asia/Singapore', timezone: 'Asia/Singapore', offset: 8 },
    { label: 'Asia/Hong_Kong', timezone: 'Asia/Hong_Kong', offset: 8 },

    // Asia - East
    { label: 'Asia/Shanghai', timezone: 'Asia/Shanghai', offset: 8 },
    { label: 'Asia/Tokyo', timezone: 'Asia/Tokyo', offset: 9 },
    { label: 'Asia/Seoul', timezone: 'Asia/Seoul', offset: 9 },
    { label: 'Asia/Taipei', timezone: 'Asia/Taipei', offset: 8 },

    // Asia - South
    { label: 'Asia/Kolkata', timezone: 'Asia/Kolkata', offset: 5.5 },
    { label: 'Asia/Karachi', timezone: 'Asia/Karachi', offset: 5 },
    { label: 'Asia/Dhaka', timezone: 'Asia/Dhaka', offset: 6 },
    { label: 'Asia/Bangkok', timezone: 'Asia/Bangkok', offset: 7 },

    // Asia - Middle East
    { label: 'Asia/Dubai', timezone: 'Asia/Dubai', offset: 4 },
    { label: 'Asia/Istanbul', timezone: 'Asia/Istanbul', offset: 3 },
    { label: 'Asia/Kolkata', timezone: 'Asia/Kolkata', offset: 5.5 },
    { label: 'Asia/Riyadh', timezone: 'Asia/Riyadh', offset: 3 },
    { label: 'Asia/Tehran', timezone: 'Asia/Tehran', offset: 3.5 },
    { label: 'Asia/Jerusalem', timezone: 'Asia/Jerusalem', offset: 2 },
    { label: 'Asia/Baghdad', timezone: 'Asia/Baghdad', offset: 3 },

    // Asia - Central
    { label: 'Asia/Almaty', timezone: 'Asia/Almaty', offset: 6 },
    { label: 'Asia/Novosibirsk', timezone: 'Asia/Novosibirsk', offset: 7 },

    // Europe
    { label: 'Europe/London', timezone: 'Europe/London', offset: 0 },
    { label: 'Europe/Paris', timezone: 'Europe/Paris', offset: 1 },
    { label: 'Europe/Berlin', timezone: 'Europe/Berlin', offset: 1 },
    { label: 'Europe/Amsterdam', timezone: 'Europe/Amsterdam', offset: 1 },
    { label: 'Europe/Brussels', timezone: 'Europe/Brussels', offset: 1 },
    { label: 'Europe/Vienna', timezone: 'Europe/Vienna', offset: 1 },
    { label: 'Europe/Prague', timezone: 'Europe/Prague', offset: 1 },
    { label: 'Europe/Budapest', timezone: 'Europe/Budapest', offset: 1 },
    { label: 'Europe/Warsaw', timezone: 'Europe/Warsaw', offset: 1 },
    { label: 'Europe/Rome', timezone: 'Europe/Rome', offset: 1 },
    { label: 'Europe/Madrid', timezone: 'Europe/Madrid', offset: 1 },
    { label: 'Europe/Athens', timezone: 'Europe/Athens', offset: 2 },
    { label: 'Europe/Helsinki', timezone: 'Europe/Helsinki', offset: 2 },
    { label: 'Europe/Istanbul', timezone: 'Europe/Istanbul', offset: 3 },
    { label: 'Europe/Moscow', timezone: 'Europe/Moscow', offset: 3 },
    { label: 'Europe/Dublin', timezone: 'Europe/Dublin', offset: 0 },
    { label: 'Europe/Lisbon', timezone: 'Europe/Lisbon', offset: 0 },
    { label: 'Europe/Zurich', timezone: 'Europe/Zurich', offset: 1 },
    { label: 'Europe/Stockholm', timezone: 'Europe/Stockholm', offset: 1 },
    { label: 'Europe/Oslo', timezone: 'Europe/Oslo', offset: 1 },
    { label: 'Europe/Copenhagen', timezone: 'Europe/Copenhagen', offset: 1 },

    // Oceania
    { label: 'Australia/Sydney', timezone: 'Australia/Sydney', offset: 10 },
    { label: 'Australia/Melbourne', timezone: 'Australia/Melbourne', offset: 10 },
    { label: 'Australia/Brisbane', timezone: 'Australia/Brisbane', offset: 10 },
    { label: 'Australia/Perth', timezone: 'Australia/Perth', offset: 8 },
    { label: 'Australia/Adelaide', timezone: 'Australia/Adelaide', offset: 9.5 },
    { label: 'Pacific/Auckland', timezone: 'Pacific/Auckland', offset: 12 },
    { label: 'Pacific/Fiji', timezone: 'Pacific/Fiji', offset: 12 },
    { label: 'Pacific/Samoa', timezone: 'Pacific/Samoa', offset: -11 },
    { label: 'Pacific/Tongatapu', timezone: 'Pacific/Tongatapu', offset: 13 },
];
