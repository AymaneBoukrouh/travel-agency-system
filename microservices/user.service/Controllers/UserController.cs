using Microsoft.AspNetCore.Mvc;
using user.Models;

namespace user.Controllers;

[ApiController]
[Route("/api/users")]
public class UserController : ControllerBase
{
    private readonly ILogger<UserController> _logger;
    private readonly ApplicationDbContext _context;

    public UserController(ILogger<UserController> logger, ApplicationDbContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet(Name = "GetUsers")]
    public IEnumerable<User> Get()
    {
        return _context.Users;
    }

    [HttpGet("{id}", Name = "GetUser")]
    public IActionResult Get(int id)
    {
        var user = _context.Users.Where(h => h.Id == id).FirstOrDefault();

        if (user == null)
        {
            return NotFound();
        }

        return Ok(user);
    }

    [HttpPost(Name = "CreateUser")]
    public IActionResult Create([FromBody] User user)
    {
        // create user
        User newUser = new User
        {
            FirstName = user.FirstName,
            LastName = user.LastName,
            Username = user.Username,
            Email = user.Email,
            Password = user.Password // TODO: hash password
        };

        // add user to database
        _context.Users.Add(newUser);
        _context.SaveChanges();

        // return user
        return CreatedAtRoute("GetUser", new { id = newUser.Id }, newUser);
    }

    [HttpPut("{id}", Name = "UpdateUser")]
    public IActionResult Update(int id, [FromBody] User user)
    {
        // get user from database
        var userToUpdate = _context.Users.Where(h => h.Id == id).FirstOrDefault();

        if (userToUpdate == null)
        {
            return NotFound();
        }

        // update user
        userToUpdate.FirstName = user.FirstName;
        userToUpdate.LastName = user.LastName;
        userToUpdate.Username = user.Username;
        userToUpdate.Email = user.Email;
        userToUpdate.Password = user.Password; // TODO: hash password

        // save changes
        _context.SaveChanges();

        // return user
        return CreatedAtRoute("GetUser", new { id = userToUpdate.Id }, userToUpdate);
    }

    [HttpDelete("{id}", Name = "DeleteUser")]
    public IActionResult Delete(int id)
    {
        // get user from database
        var userToDelete = _context.Users.Where(h => h.Id == id).FirstOrDefault();

        if (userToDelete == null)
        {
            return NotFound();
        }

        // delete user
        _context.Users.Remove(userToDelete);
        _context.SaveChanges();

        // return user
        return Ok(userToDelete);
    }
}
