const WelcomePage = ({ user, setIsLoggedIn }) => {
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <>
      <h1>Bem-vindo, {user}!</h1>
      <button onClick={handleLogout}>Sair</button>
    </>
  );
};

export default WelcomePage;
