
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

// const REGION = "REGION"; //e.g. "us-east-1"
const ddbClient = new DynamoDBClient({ region: REGION });
export { ddbClient };
