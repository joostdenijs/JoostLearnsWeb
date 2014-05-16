using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TSP_Site.RaceClasses
{
    public class TSPRacerInfo
    {
        private int _id;

        public int Id { get; private set; }

        public String RacerName { get; set; }

        public int BestSolutionValue { get; set; }

        public int[] BestSolutionPath { get; set; }
    }
}