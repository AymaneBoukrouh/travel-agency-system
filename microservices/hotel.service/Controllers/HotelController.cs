using Microsoft.AspNetCore.Mvc;
using hotel.Models;

namespace hotel.Controllers;

[ApiController]
[Route("/api/hotels")]
public class HotelController : ControllerBase
{
    private readonly ILogger<HotelController> _logger;
    private readonly ApplicationDbContext _context;

    public HotelController(ILogger<HotelController> logger, ApplicationDbContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet(Name = "GetHotels")]
    public IEnumerable<Hotel> Get()
    {
        return _context.Hotels;
    }

    [HttpGet("{id}", Name = "GetHotel")]
    public IActionResult Get(int id)
    {
        var hotel = _context.Hotels.Where(h => h.Id == id).FirstOrDefault();

        if (hotel == null)
        {
            return NotFound();
        }

        return Ok(hotel);
    }

    [HttpPost(Name = "CreateHotel")]
    public IActionResult Create([FromBody] Hotel hotel)
    {
        // create hotel
        Hotel newHotel = new Hotel
        {
            Name = hotel.Name,
            City = hotel.City
        };

        // add hotel to database
        _context.Hotels.Add(newHotel);
        _context.SaveChanges();

        // return hotel
        return CreatedAtRoute("GetHotel", new { id = newHotel.Id }, newHotel);
    }

    [HttpPut("{id}", Name = "UpdateHotel")]
    public IActionResult Update(int id, [FromBody] Hotel hotel)
    {
        // get hotel from database
        var hotelToUpdate = _context.Hotels.Where(h => h.Id == id).FirstOrDefault();

        if (hotelToUpdate == null)
        {
            return NotFound();
        }

        // update hotel
        hotelToUpdate.Name = hotel.Name;
        hotelToUpdate.City = hotel.City;

        // save changes
        _context.SaveChanges();

        // return hotel
        return CreatedAtRoute("GetHotel", new { id = hotelToUpdate.Id }, hotelToUpdate);
    }

    [HttpDelete("{id}", Name = "DeleteHotel")]
    public IActionResult Delete(int id)
    {
        // get hotel from database
        var hotelToDelete = _context.Hotels.Where(h => h.Id == id).FirstOrDefault();

        if (hotelToDelete == null)
        {
            return NotFound();
        }

        // delete hotel
        _context.Hotels.Remove(hotelToDelete);
        _context.SaveChanges();

        // return hotel
        return Ok(hotelToDelete);
    }
}
