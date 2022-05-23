function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="container">
      <hr/>
      <p className="text-center">
        Copyright &copy; {year} <a href="#">dashadow</a>
      </p>
    </div>
  );
}
export default Footer;