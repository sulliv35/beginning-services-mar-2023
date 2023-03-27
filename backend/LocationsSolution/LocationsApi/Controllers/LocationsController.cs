using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LocationsApi.Controllers;

public class LocationsController : ControllerBase
{
    [Authorize]
    [HttpGet("/locations")]
    public async Task<ActionResult> GetLocations()
    {
        var response = new
        {
            _embedded = new List<object>
            {
                new { id = "1", name ="Tacos", description = "Stuff", addedOn = DateTime.Now, addedBy = "Jose"}
            }
        };
        return Ok(response);
    }
}
