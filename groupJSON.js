function formatDate(date) {
    var fullDate = new Date(date);
    var twoDigitMonth = (fullDate.getMonth() + 1) + "";
    if (twoDigitMonth.length == 1)
        twoDigitMonth = "0" + twoDigitMonth;
    var twoDigitDate = fullDate.getDate() + "";
    if (twoDigitDate.length == 1)
        twoDigitDate = "0" + twoDigitDate;
    //var currentDate = twoDigitDate + "/" + twoDigitMonth + "/" + fullDate.getFullYear(); 
    var currentDate = twoDigitDate + "" + twoDigitMonth + "" + fullDate.getFullYear();
    return currentDate;
}

var won = [
    {
        "auctionId": 305758756,
        "itemNumber": "16-512",
        "title": "GAMOTO Brake Arm",
        "status": "Win",
        "endDateTimeUTC": "2019-06-10T06:26:55.313Z",
        "endDateTimeUTC_String": "2019-06-10T06:26:55.3130000Z",
        "userCurrentBid": 81,
        "winningBid": 81,
        "imageBaseAddress": "https://cdn-chilindo.com",
        "imagePath": "/XML/Gfx/16-512/16-512-main_75.jpg"
    },
    {
        "auctionId": 305166308,
        "itemNumber": "45-578",
        "title": "Men's Casual Slippers",
        "status": "Win",
        "endDateTimeUTC": "2019-06-08T20:59:22.417Z",
        "endDateTimeUTC_String": "2019-06-08T20:59:22.4170000Z",
        "userCurrentBid": 41,
        "winningBid": 41,
        "imageBaseAddress": "https://cdn-chilindo.com",
        "imagePath": "/XML/Gfx/45-578/45-578_011_75.jpg"
    }
];
var lost = [
    {
        "auctionId": 287155538,
        "itemNumber": "13-373",
        "title": "GOLDCITY Sneakers for Men : Grey",
        "status": "Lost",
        "endDateTimeUTC": "2019-06-10T06:26:55.313Z",
        "endDateTimeUTC_String": "2019-06-10T06:26:55.3130000Z",
        "userCurrentBid": 81,
        "winningBid": 81,
        "imageBaseAddress": "https://cdn-chilindo.com",
        "imagePath": "/XML/Gfx/16-512/16-512-main_75.jpg"
    },
    {
        "auctionId": 280657252,
        "itemNumber": "41-994",
        "title": "GESTREO Hot and Cold Water Dispenser",
        "status": "Lost",
        "endDateTimeUTC": "2019-04-17T03:42:55.71Z",
        "endDateTimeUTC_String": "2019-04-17T03:42:55.7100000Z",
        "userCurrentBid": 201,
        "winningBid": 601,
        "imageBaseAddress": "https://cdn-chilindo.com",
        "imagePath": "/XML/Gfx/41-994/41-994-main1.1_75.jpg"
    }
]
var combine = [...won, ...lost];

var dataindex = [];
var dataGroup = [];

for (var i = 0; i < combine.length; i++) {
    var key = formatDate(combine[i].endDateTimeUTC_String);
    if(!dataindex.includes(key)){
        dataindex.push(key);
        var DataNode = {
            "date": key,
            "feed": []
        }
        dataGroup.push(DataNode);
    }
    dataGroup[dataindex.indexOf(key)].feed.push(combine[i]);
}
console.log(dataGroup[0].feed[0]);