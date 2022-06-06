using CaseStudyHotel.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace CaseStudyHotel.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SearchController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public SearchController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get(SerachRooms Sea)
        {
            string query = @"
                  select SUM(Rooms_Available) AS Rooms_Available from SearchRooms where (check_IN_DATE BETWEEN '" + Sea.check_IN_DATE + @"' AND '" + Sea.Check_OUT_DATE + @"')AND RoomType = '" + Sea.RoomType + @"'";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("Searchroomconn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }



            return new JsonResult(table);
        }
    }
}