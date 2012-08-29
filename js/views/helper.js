
define([
    'underscore',
    'backbone'
], function(_, Backbone){
    return {
        timeZoneChoices : [
            {label : '(GMT -12:00) Eniwetok, Kwajalein', val: 'GMT-12.00'},
            {label : '(GMT -11:00) Midway Island, Samoa', val: 'GMT-11.00'},
            {label : '(GMT -10:00) Hawaii', val: 'GMT-10.00'},
            {label : '(GMT -9:00) Alaska', val: 'GMT-9.00'},
            {label : '(GMT -8:00) Pacific Time (US & Canada)', val: 'GMT-8.00'},
            {label : '(GMT -7:00) Mountain Time (US & Canada)', val: 'GMT-7.00'},
            {label : '(GMT -6:00) Central Time (US & Canada), Mexico City', val: 'GMT-6.00'},
            {label : '(GMT -5:00) Eastern Time (US & Canada), Bogota, Lima', val: 'GMT-5.00'},
            {label : '(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz', val: 'GMT-4.00'},
            {label : '(GMT -3:30) Newfoundland', val: 'GMT-3.50'},
            {label : '(GMT -3:00) Brazil, Buenos Aires, Georgetown', val: 'GMT-3.00'},
            {label : '(GMT -2:00) Mid-Atlantic', val: 'GMT-2.00'},
            {label : '(GMT -1:00 hour) Azores, Cape Verde Islands', val: 'GMT-1.00'},
            {label : '(GMT) Western Europe Time, London, Lisbon, Casablanca', val: 'GMT+0.00'},
            {label : '(GMT +1:00 hour) Brussels, Copenhagen, Madrid, Paris', val: 'GMT+1.00'},
            {label : '(GMT +2:00) Kaliningrad, South Africa', val: 'GMT+2.00'},
            {label : '(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg', val: 'GMT+3.00'},
            {label : '(GMT +3:30) Tehran', val: 'GMT+3.50'},
            {label : '(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi', val: 'GMT+4.00'},
            {label : '(GMT +4:30) Kabul', val: 'GMT+4.50'},
            {label : '(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent', val: 'GMT+5.00'},
            {label : '(GMT +5:30) Bombay, Calcutta, Madras, New Delhi', val: 'GMT+5.50'},
            {label : '(GMT +5:45) Kathmandu', val: 'GMT+5.75'},
            {label : '(GMT +6:00) Almaty, Dhaka, Colomb', val: 'GMT+6.00'},
            {label : '(GMT +7:00) Bangkok, Hanoi, Jakarta', val: 'GMT+7.00'},
            {label : '(GMT +8:00) Beijing, Perth, Singapore, Hong Kong', val: 'GMT+8.00'},
            {label : '(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk', val: 'GMT+9.00'},
            {label : '(GMT +9:30) Adelaide, Darwin', val: 'GMT+9.50'},
            {label : '(GMT +10:00) Eastern Australia, Guam, Vladivostok', val: 'GMT+10.00'},
            {label : '(GMT +11:00) Magadan, Solomon Islands, New Caledonia', val: 'GMT+11.00'},
            {label : '(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka', val: 'GMT+12.00'}
        ]
    };
});

