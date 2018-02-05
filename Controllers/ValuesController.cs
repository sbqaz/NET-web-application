using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using deployment_studie_job.Models;
using Microsoft.AspNetCore.Mvc;

namespace deployment_studie_job.Controllers
{
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
        public IEnumerable<String> GetFolderStructure()
        {
            List<String> files = new List<String>();
            // System.IO.DirectoryInfo dirInfo = new DirectoryInfo(@"C:\Testfolder\headquarters");
            System.IO.DirectoryInfo dirInfo = new DirectoryInfo(@"X:\Latest Builds\SitaWare HQ\6.7.x");
            // Get the subdirectories directly under the root.

            System.IO.DirectoryInfo[] dirInfos = dirInfo.GetDirectories("*.*");

            foreach (System.IO.DirectoryInfo d in dirInfos)
            {
                Console.WriteLine(d.Name);
                files.Add(d.Name);
            }
            return files.ToList();
        }
    }

    [Route("api/[Controller]")]
    public class FLBuildsController : Controller
    {
        [HttpGet]
        public IEnumerable<String> GetFolderStructure()
        {
            List<String> files = new List<String>();
            // System.IO.DirectoryInfo dirInfo = new DirectoryInfo(@"C:\Testfolder\headquarters");
            System.IO.DirectoryInfo dirInfo = new DirectoryInfo(@"X:\Latest Builds\Frontline\Frontline-2.0-release");
            // Get the subdirectories directly under the root.

            System.IO.DirectoryInfo[] dirInfos = dirInfo.GetDirectories("*.*");

            foreach (System.IO.DirectoryInfo d in dirInfos)
            {
                Console.WriteLine(d.Name);
                files.Add(d.Name);
            }
            return files.ToList();
        }
    }

    [Route("api/[Controller]")]
    public class DeploymentController : Controller {
        [HttpPost]
        public IActionResult PostStuff([FromBody] TestEnvironment env) {
            using (StreamWriter writer = new StreamWriter("C:\\Temp\\deploymentForm\\test.txt", true)) {
                writer.WriteLine(env.environment);
                writer.WriteLine(env.hqBuild);
                writer.WriteLine(env.hqInstallationType);
                writer.WriteLine(env.flBuild);
            }
            return Ok("Generated file from deployment form");     
        }
    }
}
