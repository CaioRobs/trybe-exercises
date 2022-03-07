const { User } = require("./src/models");

const addLastName = async (lastName) => {
  await User.update(
    { lastName: lastName },
    {
      where: { lastName: null },
    }
  );
};

addLastName("Johnson");
