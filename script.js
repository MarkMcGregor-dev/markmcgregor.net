// Initialize the Amazon Cognito credentials provider
AWS.config.region = "us-east-2";
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "us-east-2:46d819bf-9ce9-4060-8a57-9c41a8322ecd"
});
AWS.config.apiVersions = {
  ec2: "2016-11-15",
  lambda: "2015-03-31"
};

function startup() {
  updateFields();
  getEC2Status();
  //   startEC2();
}

function updateFields() {
  setStatus("OFFLINE");
  setCurrentIP("UNNAVAILABLE");
  setLastIP("UNNAVAILABLE");
}

function setStatus(value) {
  setField("status", value);
}

function setCurrentIP(value) {
  setField("ip_current", value);
}

function setLastIP(value) {
  setField("ip_last", value);
}

function setField(field, value) {
  document.getElementsByClassName(field)[0].innerHTML = value;
}

function getEC2Status() {
  var ec2 = new AWS.EC2();

  var params = {
    InstanceIds: ["i-07a157bcc0241d75c"]
  };

  ec2.describeInstances(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log(data);
  });
}

function startEC2() {
  var lambda = new AWS.Lambda();

  var params = {
    FunctionName: "StartEC2Instances"
  };

  lambda.invoke(params, function(err, data) {
    if (err) console.log(err, err.stack);
    console.log(data);
  });
}
