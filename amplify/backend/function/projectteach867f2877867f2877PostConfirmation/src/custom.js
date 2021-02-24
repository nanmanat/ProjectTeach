import { DynamoDB } from 'aws-sdk';
const ddb = new DynamoDB();

export async function handler(event, context) {
  if (!event.request.userAttributes.sub) {
    console.log("Error: No user was written to DynamoDB")
    context.done(null, event);
    return;
  }

  // Save the user to DynamoDB
  const date = new Date();

  const Item = {
    'id': { S: event.request.userAttributes.sub },
    '__typename': { S: 'User' },
    'email': { S: event.request.userAttributes.email },
    'email': { S: event.request.userAttributes.name },
    'email': { S: event.request.userAttributes.image },
    'createdAt': { S: date.toISOString() },
    'updatedAt': { S: date.toISOString() },
  }

  if (event.request.userAttributes.picture) {
    Item.image = { S: event.request.userAttributes.picture };
  }

  if (event.request.userAttributes.name) {
    Item.name = { S: event.request.userAttributes.name };
  }

  const params = {
    Item,
    TableName: process.env.USERTABLE,
  }

  try {
    await ddb.putItem(params).promise();
    console.log("Success");
  } catch (e) {
    console.log("Error", e);
  }
  
  try {
    await ddb.putItem({
      Item: PortfolionCoinItem,
      TableName: process.env.PORTFOLIO_COIN_TABLE,
    }).promise();
    console.log("Success");
  } catch (e) {
    console.log("Error", e);
  }
  context.done(null, event);
}
