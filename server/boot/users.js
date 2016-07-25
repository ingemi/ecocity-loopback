User.create([
    {username: 'Emi', email: 'emiliano.daza@gmail.com', password: '32158677'},
], function(err, users) {
    if (err) return debug('%j', err);
    // Create the admin role
    Role.create({
      name: 'admin'
    }, function(err, role) {
      if (err) return debug(err);
      debug(role);
 
      // Make Bob an admin
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[0].id
      }, function(err, principal) {
        if (err) return debug(err);
        debug(principal);
      });
    });
  });
};