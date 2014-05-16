using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace TSP_Site.TSP
{
    public class TravelingSalesmanProblem
    {
        private List<Tuple<int, int>> _cities;
        private int[][] _cityDistances;
        private int _id;

        public TravelingSalesmanProblem(String filepath)
        {
            _cities = new List<Tuple<int, int>>();
            _cityDistances = null;
            try
            {
                using (StreamReader _problemInfo = new StreamReader(filepath))
                {
                    while (!(_problemInfo.EndOfStream))
                    {
                        string line = _problemInfo.ReadLine();
                        string[] splitLine = line.Split(' ');
                        _cities.Add(new Tuple<int, int>(Convert.ToInt32(splitLine[0]), Convert.ToInt32(splitLine[1])));
                    }

                }
            }
            catch (FileNotFoundException e)
            {
                Console.Out.Write("Could not find the file");
            }
        }
    }
}