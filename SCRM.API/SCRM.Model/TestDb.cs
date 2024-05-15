namespace SCRM.Model
{
    public class TestDb
    {

        public int Id { get; set; }
        public string UserName { get; set; }
        public string FName { get; set; }
        public string LName { get; set; }
         public DateTime CurrentCheckInDate { get; set; } = DateTime.Now;
    }
}