using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SCRM.Model
{
    public class Response:IDisposable
    {
        public long transationId { get; set; } = DateTime.Now.Ticks;
        public int totalRecords { get; set; }
        public int statusCode { get; set; }
        public bool success { get; set; } = false;

        public string message { get; set; }
        public object responseData { get; set; }
        public string token { get; set; }

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }
    }
}
