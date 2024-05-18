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
        private readonly IWebHostEnvironment _env;


        public CommonController(ICommonService commonService, IWebHostEnvironment env)
        {
            _commonService = commonService;
            _env = env;
        }

        [HttpGet("GetProfileDetails")]
        public IActionResult GetProfileDetails()
        {
            int userId = Convert.ToInt32(HttpContext.User.FindFirst("UserId").Value);
            var data = _commonService.ProfileDetails(userId);
            return Ok(data);
        }
        [HttpGet("GetRoles")]
        public IActionResult GetRoles()
        {
            var data = _commonService.GetRole();
            return Ok(data);
        }




        [HttpPost("UploadImage")]
        public IActionResult UploadImage(IFormFile image)
        {
            if (image == null || image.Length == 0) 
                return BadRequest("No file uploaded.");

            var uploadsPath = Path.Combine(_env.ContentRootPath, "Images");
            if (!Directory.Exists(uploadsPath))
            {
                Directory.CreateDirectory(uploadsPath);
            }

            var filePath = Path.Combine(uploadsPath, image.FileName);
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                  image.CopyToAsync(stream);
            }

            var fileUrl = $"{Request.Scheme}://{Request.Host}/Images/{image.FileName}";
            return Ok(new { url = fileUrl });
        }


    }   
}
