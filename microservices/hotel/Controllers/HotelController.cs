using Microsoft.AspNetCore.Mvc;

namespace hotel.Controllers;

[ApiController]
[Route("[controller]")]
public class HotelController : ControllerBase
{
    private readonly ILogger<HotelController> _logger;

    public HotelController(ILogger<HotelController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetHotel")]
    public IEnumerable<Hotel> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new Hotel
        {
            name = "Hotel",
            city = "City"
        })
        .ToArray();
    }

    [HttpPost(Name = "CreateHotel")]
    public IActionResult Create([FromBody] Hotel hotel)
    {
        return CreatedAtRoute("GetHotel", new { id = 1 }, hotel);
    }

    [HttpPut(Name = "UpdateHotel")]
    public IActionResult Update([FromBody] Hotel hotel)
    {
        return Ok(hotel);
    }

    [HttpDelete("{id}", Name = "DeleteHotel")]
    public IActionResult Delete(int id)
    {
        return NoContent();
    }
}
