const Status = () => {
  const games = [
    { name: "Free Fire", status: "Online", uptime: "99.9%" },
    { name: "Fortnite", status: "Online", uptime: "99.8%" },
    { name: "PUBG", status: "Online", uptime: "99.9%" },
    { name: "Apex Legends", status: "Online", uptime: "99.7%" },
  ];

  return (
    <section className="section-spacing">
      <div className="container-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Service Status
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {games.map((game, index) => (
            <div
              key={index}
              className="card flex items-center justify-between animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div>
                <h3 className="font-semibold">{game.name}</h3>
                <p className="text-sm text-muted-foreground">Uptime: {game.uptime}</p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                <span className="text-green-500">{game.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Status;