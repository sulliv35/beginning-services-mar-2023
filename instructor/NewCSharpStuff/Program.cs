// Everything in here goes to static Void Main


using NewCSharpStuff;

Console.WriteLine("Hello, World!");


var c1 = new Customer()
{
    Name = "Bob",

   
};
c1.Orders.Add(new Order());

if (c1.Name is not null && c1.Age.HasValue)
{
    Console.WriteLine($"The name is {c1.Name} and the age is {c1.Age.Value}");

}
else
{
}


// Sir Tony Hoare "My Four Billion Dollar Mistake"
