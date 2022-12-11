namespace hotel.Models
{
    public class Hotel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }

        [Required(ErrorMessage = "City is required")]
        public string City { get; set; }
    }
}