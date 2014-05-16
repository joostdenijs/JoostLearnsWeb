using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System.Collections.Concurrent;

namespace TSP_Site.RaceClasses
{
    public class RaceBroadcaster
    {
        private readonly static Lazy<RaceBroadcaster> _instance = new Lazy<RaceBroadcaster>(() => new RaceBroadcaster(GlobalHost.ConnectionManager.GetHubContext<RaceCommunicationsHub>().Clients));

        private readonly bool _isRacing = false;

        private readonly TSPInstanceInfo _problem;

        private readonly ConcurrentDictionary<int, TSPRacerInfo> _racers = new ConcurrentDictionary<int, TSPRacerInfo>();

        private IHubConnectionContext Clients
        {
            get;
            set;
        }

        private RaceBroadcaster(IHubConnectionContext clients)
        {
            // TODO: Complete member initialization
            Clients = clients;
        }

        public static RaceBroadcaster Instance
        {
            get
            {
                return _instance.Value;
            }
        }

        public TSPInstanceInfo Problem
        {
            get
            {
                return _problem;
            }
            private set
            {
            }
        }

        public IEnumerable<TSPRacerInfo> GetAllRacers()
        {
            return _racers.Values;
        }

        private void BroadcastRacerUpdate(TSPRacerInfo racer)
        {
            Clients.All.updateRacerInfo(racer);
        }
    }
}