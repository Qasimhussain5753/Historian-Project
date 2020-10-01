const { MongoClient } = require('mongodb');

describe('insert', () => {
  let connection;
  let db;
    const URL = 'http://localhost:4000/fetch/';
    const MongoDB_Name = Poet;
  beforeAll(async () => {
    connection = await MongoClient.connect(global.URL, {
      useNewUrlParser: true,
    });
    db = await connection.db(global.MongoDB_Name);
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it('should insert a doc into collection', async () => {
    const users = db.collection('users');

    const mockUser = {_id: 'some-user-id', name: 'John'};
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({_id: 'some-user-id'});
    expect(insertedUser).toEqual(mockUser);
  });
});