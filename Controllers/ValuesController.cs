using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using deployment_studie_job.Models;
using Microsoft.AspNetCore.Mvc;

namespace deployment_studie_job.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }

    [Route("api/[Controller]")]
    public class HelloController : Controller
    {
        [HttpGet]
        public IActionResult Greetings()
        {
            return Ok("Hello from ASP NET API");
        }
    }
    [Route("api/[Controller]")]
    public class HQBuildsController : Controller
    {
        [HttpGet]
        public IEnumerable<HqBuild> GetFolderStructure()
        {
            List<HqBuild> files = new List<HqBuild>();
            System.IO.DirectoryInfo dirInfo = new DirectoryInfo(@"C:\Testfolder\headquarters");
            // Get the subdirectories directly that is under the root.

            System.IO.DirectoryInfo[] dirInfos = dirInfo.GetDirectories("*.*");

            foreach (System.IO.DirectoryInfo d in dirInfos)
            {
                Console.WriteLine(d.Name);
                files.Add(new HqBuild() { Name = d.Name });
            }
            return files.ToList();
        }
    }
    [Route("api/[Controller]")]
    public class FLBuildsController : Controller
    {
        [HttpGet]
        public IEnumerable<HqBuild> GetFolderStructure()
        {
            List<HqBuild> files = new List<HqBuild>();
            System.IO.DirectoryInfo dirInfo = new DirectoryInfo(@"C:\Testfolder\frontline");
            // Get the subdirectories directly that is under the root.

            System.IO.DirectoryInfo[] dirInfos = dirInfo.GetDirectories("*.*");

            foreach (System.IO.DirectoryInfo d in dirInfos)
            {
                Console.WriteLine(d.Name);
                files.Add(new HqBuild() { Name = d.Name });
            }
            return files.ToList();
        }
    }
}
