using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using SCRM.Model;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace SCRM.Service
{
    public static class Helper
    {

        public static string HashPassword(string password)
        {
            using (SHA256 sha256Hash = SHA256.Create())
            {
                byte[] bytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(password));
                StringBuilder builder = new StringBuilder();
                for (int i = 0; i < bytes.Length; i++)
                {
                    builder.Append(bytes[i].ToString("x2"));
                }
                return builder.ToString();
            }
        }

        // Generate salted password by appending a random salt to the hashed password
        public static string GenerateSaltedPassword(string hashedPassword)
        {
            // Generate a random salt
            byte[] salt = new byte[16];
            using (RNGCryptoServiceProvider rng = new RNGCryptoServiceProvider())
            {
                rng.GetBytes(salt);
            }

            // Convert salt to base64 string
            string saltString = Convert.ToBase64String(salt);

            // Append salt to hashed password
            return hashedPassword + saltString;
        }

        public static string GenerateToken(MUserLoginDetail user,IConfiguration _config)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new[]
            {
                new Claim("UserId",user.UserId.ToString()),
                new Claim("Name",value: user.FullName),
                new Claim("Email",value: user.Email),
                new Claim("Role",user.RoleId.ToString())
            };
            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
                _config["Jwt:Audience"],
                claims,
                expires: DateTime.Now.AddMinutes(20),
                signingCredentials: credentials);
            return new JwtSecurityTokenHandler().WriteToken(token);

        }

    }
}
