using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace TSP_Site.RaceClasses
{
    public class RaceCommunicationsHub : Hub
    {
        private readonly RaceBroadcaster _raceBroadcaster;

        public RaceCommunicationsHub() : this(RaceBroadcaster.Instance) { }

        public RaceCommunicationsHub(RaceBroadcaster broadcaster)
        {
            _raceBroadcaster = broadcaster;
        }

        public TSPInstanceInfo getProblemInfo()
        {
            return _raceBroadcaster.Problem;
        }

        public IEnumerable<TSPRacerInfo> getRacers()
        {
            return _raceBroadcaster.GetAllRacers();
        }
    }
}