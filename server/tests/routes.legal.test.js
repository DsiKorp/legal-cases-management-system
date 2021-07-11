const request = require("supertest");

const { app } = require("../server");

/**
 * Testing sumActiveLegalCases endPoint
 */
describe("POST /legal/api/sumActiveLegalCases", () => {
  //   it("respond with json containing Sum with active cases if service up", (done) => {
  //     request(app)
  //       .post("/legal/api/sumActiveLegalCases")
  //       .set("Accept", "application/json")
  //       .set(
  //         "apiKey",
  //         "Basic 6bc7e79c84511336177dddd98a2ca8c05b123a7247c186c488288e439bd85b1d"
  //       )
  //       .expect("Content-Type", /json/)
  //       .expect(200, done);
  //   });

  it("UNIT TEST 1 (sumActiveLegalCases): respond with json containing the SUM of the active legal cases. The system should return USD 1.087.000,00", (done) => {
    request(app)
      .post("/legal/api/sumActiveLegalCases")
      .set("Accept", "application/json")
      .set(
        "apiKey",
        "Basic 6bc7e79c84511336177dddd98a2ca8c05b123a7247c186c488288e439bd85b1d"
      )
      .expect("Content-Type", /json/)
      .expect('{"response":{"sumActive":"1087000.00"}}')
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

/**
 * Testing avgRioCompanyA endPoint
 */
describe("POST /legal/api/avgRioCompanyA", () => {
  it("UNIT TEST 2 (avgRioCompanyA): respond with json containing the average of the legal case in Rio de Janeiro for the client “Company A”. The application should return USD 110.000,00", (done) => {
    request(app)
      .post("/legal/api/avgRioCompanyA")
      .set("Accept", "application/json")
      .set(
        "apiKey",
        "Basic 6bc7e79c84511336177dddd98a2ca8c05b123a7247c186c488288e439bd85b1d"
      )
      .expect("Content-Type", /json/)
      .expect('{"response":{"avgRioCompanyA":"110000.00"}}')
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

/**
 * Testing numCasesGreater100k endPoint
 */
 describe("POST /legal/api/numCasesGreater100k", () => {
  it("UNIT TEST 3 (numCasesGreater100k): respond with the number of legal cases with the amount greater than USD 100.000,00. The application should return 2.", (done) => {
    request(app)
      .post("/legal/api/numCasesGreater100k")
      .set("Accept", "application/json")
      .set(
        "apiKey",
        "Basic 6bc7e79c84511336177dddd98a2ca8c05b123a7247c186c488288e439bd85b1d"
      )
      .expect("Content-Type", /json/)
      .expect('{"response":{"numberCases":2}}')
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

/**
 * Testing getListSept2007 endPoint
 */
 describe("POST /legal/api/getListSept2007", () => {
  it("UNIT TEST 4 (getListSept2007): respond with the list of legal cases on the month of September and year 2007. The applications must return a list with only legal case “00010TRABAM”", (done) => {
    request(app)
      .post("/legal/api/getListSept2007")
      .set("Accept", "application/json")
      .set(
        "apiKey",
        "Basic 6bc7e79c84511336177dddd98a2ca8c05b123a7247c186c488288e439bd85b1d"
      )
      .expect("Content-Type", /json/)
      .expect('{"response":[{"number":"00010TRABAM"}]}')
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

/**
 * Testing getListSameDepartament endPoint
 */
 describe("POST /legal/api/getListSameDepartament", () => {
  it("UNIT TEST 5 (getListSameDepartament): respond with the list of legal case with the same department of the client, for each of the clients registered. The application should return a list of legal cases: “00001CIVELRJ”,”00004CIVELRJ” for the client “Company A” and “00008CIVELSP”,”00009CIVELSP” for the client “Company B”", (done) => {
    request(app)
      .post("/legal/api/getListSameDepartament")
      .set("Accept", "application/json")
      .set(
        "apiKey",
        "Basic 6bc7e79c84511336177dddd98a2ca8c05b123a7247c186c488288e439bd85b1d"
      )
      .expect("Content-Type", /json/)
      .expect( '{"response":[{"name":"Company A","number":"00001CIVELRJ"},{"name":"Company A","number":"00004CIVELRJ"},{"name":"Company B","number":"00008CIVELSP"},{"name":"Company B","number":"00009CIVELSP"}]}')
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

/**
 * Testing getListAcronymTrab endPoint
 */
 describe("POST /legal/api/getListAcronymTrab", () => {
  it("UNIT TEST 6 (getListAcronymTrab): respond with the list of legal cases that contains the acronym “TRAB”. The application should return a list with legal cases “00003TRABMG” e “00010TRABAM”", (done) => {
    request(app)
      .post("/legal/api/getListAcronymTrab")
      .set("Accept", "application/json")
      .set(
        "apiKey",
        "Basic 6bc7e79c84511336177dddd98a2ca8c05b123a7247c186c488288e439bd85b1d"
      )
      .expect("Content-Type", /json/)
      .expect( '{"response":[{"number":"00003TRABMG"},{"number":"00010TRABAM"}]}' )
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});