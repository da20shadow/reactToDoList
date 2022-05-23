function Footer() {
  let date = new Date();
  return (
    <div className="container">
      <hr/>
      <p className="text-center">
        Copyright &copy; {date.getFullYear} <a href="#">dashadow</a>
      </p>
    </div>
  );
}
export default Footer;