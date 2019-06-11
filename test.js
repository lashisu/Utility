var newData = {
    "serviceUsageForSubscriptions": [
        {
            "subscriptionId": "BE23C171-5742-49E9-82A3-82099BBBBFF8",
            "subscriptionName": "Microsoft Azure",
            "usage": [
                {
                    "month": "MAY",
                    "value": 0.43
                }
            ]
        },
        {
            "subscriptionId": "C606E94B-B661-4544-872E-FC21E1274807",
            "subscriptionName": "Microsoft Azure",
            "usage": [
                {
                    "month": "MARCH",
                    "value": 0.1
                }, {
                    "month": "DECEMBER",
                    "value": 0.1
                }
            ]
        }
    ]
}
var data = {};
for (var i=0; i < newData.serviceUsageForSubscriptions.length; i++) {
    var FullData = [];
    for (var j=0; j < newData.serviceUsageForSubscriptions[i].usage.length; j++) {
        var InData = {
            "key": newData.serviceUsageForSubscriptions[i].usage[j].month,
            "value": newData.serviceUsageForSubscriptions[i].usage[j].value,
        } 
        FullData.push(InData)
    }
    data[newData.serviceUsageForSubscriptions[i].subscriptionName + '#'+i] = FullData;
}

var dataNew = [];
for (var i in data) {
    var service =data[i];
    service.map(function (obj) {
        obj.date = obj.key
    })
    service.reverse();
    dataNew.push({
        name: i,
        data: service
    })
}
console.log(dataNew);