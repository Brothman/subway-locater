//   const MTA_API = process.env.mta_api;
const MTA_API = 'dd0969df85e7f93e712dfb212544f3d9';

// api call to mta using isomorphic fetch
const getData = (req, res, next) => {
    axios.get(`http://datamine.mta.info/mta_esi.php?key=${MTA_API}&feed_id=${req.body.field_id}`)
        .then(fetchRes => {
            // console.log(fetchRes.body);
            var feed = GtfsRealtimeBindings.FeedMessage.decode(fetchRes.body);
            feed.entity.forEach(function (entity) {
                if (entity.trip_update) {
                    console.log(entity.trip_update);
                }
            });
            console.log(feed);
            next();
        }).then(jsonRes => {
            res.locals.mta = jsonRes;
            next();
        }).catch(err => {
            console.log(err);
        })
};

export default getData;