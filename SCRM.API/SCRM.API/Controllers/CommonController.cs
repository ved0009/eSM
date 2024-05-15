using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SCRM.IService;
using System.Security.Claims;

namespace SCRM.API.Controllers
{
    [Route("api/[controller]")]
   // [Authorize]
    [ApiController]
    public class CommonController : ControllerBase
    {
        private readonly ICommonService _commonService;

        public CommonController(ICommonService commonService)
        {
            _commonService = commonService;
        }

        [HttpGet("GetProfileDetails")]
        public IActionResult GetProfileDetails()
        {
            int userId = Convert.ToInt32(HttpContext.User.FindFirst("UserId").Value);
            var data = _commonService.ProfileDetails(userId);
            return Ok(data);
        }


    }   
}
