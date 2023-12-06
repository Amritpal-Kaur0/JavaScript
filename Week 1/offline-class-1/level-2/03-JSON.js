function jsonMethods(jsonString) {
  console.log("Original JSON String:", jsonString);

  console.log("trying to print jsonString's key " , jsonString["key\n"]);

  // Parsing JSON string to JavaScript object
  let parsedObject = JSON.parse(jsonString);
  console.log("After JSON.parse():", parsedObject ,"\n");

  console.log("trying to print jsonString's key - ", parsedObject["key"]);

  // Stringifying JavaScript object to JSON string
  let jsonStringified = JSON.stringify(parsedObject);
  console.log("After JSON.stringify():", jsonStringified);

  console.log("trying to print jsonString's key", jsonStringified["number/n"]);
}

// Example Usage for JSON Methods
const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

jsonMethods(sampleJSONString);
