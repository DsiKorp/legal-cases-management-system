### Proyect: legal-cases-management-system

This project has been generated with [NodeJs](https://nodejs.org/es/download/current/) version 16.3.0 and npm (npm install --global npm@latest) 7.16.0

## Installation and execution

Steps for installation and execution:

<ul>
  <li><h4>1. NodeJs Installation:</h4>
    <ul>
    <li>1.1. Download NodeJs (https://nodejs.org/es/download/current/), and install it on your local machine, be it Windows, macOS, or Linux (yum, apt-get, etc, https://nodejs.org/es/download/package-manager/).</li>
    <li>1.2. To verify the Node installation, run from the command line (gitBatch, D.O.S., terminal) 'node --version', also run 'npm --version'.</li>
    </ul>
  </li>
  <li><h4>2. Git Project Installation:</h4>
    <ul>
    <li>2.1. Clone the project from the git repository.</li>
    <li>2.2. Enter the root folder of the project (legal-cases-management-system) and run on the command line: 'npm install' to install the corresponding libraries.</li>
    </ul>
  </li>
    <li><h4>3. Run Services for Testing in Postaman:</h4>
    <ul>
    <li>3.1. In the root folder of the project (legal-cases-management-system) run the command: npm run start</li>
    <li>3.2. Web Services Paths for Your Postman Test :
      <ol>1. Case 1: http://localhost:8444/legal/api/sumActiveLegalCases</ol>
      <ol>2. Case 2: http://localhost:8444/legal/api/avgRioCompanyA</ol>
      <ol>3. Case 3: http://localhost:8444/legal/api/numCasesGreater100k</ol>
      <ol>4. Case 4: http://localhost:8444/legal/api/getListSept2007</ol>
      <ol>5. Case 5: http://localhost:8444/legal/api/getListSameDepartament</ol>
      <ol>6. Case 6: http://localhost:8444/legal/api/getListAcronymTrab</ol>
    </li>
    <li>3.3. All Web Services must send the security apiKey for the authentication in the service header with the following key-value: apiKey = Basic 6bc7e79c84511336177dddd98a2ca8c05b123a7247c186c488288e439bd85b1d</li>
    </ul>
  </li>
  <li><h4>4. Run Services for Unit Testing: </h4>
    <ul>
    <li>4.1. In the root folder of the project (legal-cases-management-system) run the command: npm run test</li>
    <li>4.2. In the console you will see the execution of each of the unit tests, with its corresponding assertion and result.</li>
    </ul>
  </li>
  <li>5. Thank You.</li>
</ul>
    