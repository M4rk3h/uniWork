import json

# Enter your keys/secrets as strings in the following fields
credentials = {}
credentials['CONSUMER_KEY'] = "ntFFMzu9lUgvQEx6QPipUK4Q9"
credentials['CONSUMER_SECRET'] = "fsD4iPE9LZl741zV4qq53CETenq1MKLMy1dNKbQgpvWa3EcYWz"
credentials['ACCESS_TOKEN'] = "755358007-4BpQwTZmdsXCfku18GPjpTDLki5uhjA275CloRcF"
credentials['ACCESS_SECRET'] = "ZkeTMqGDeMCXgCLoGU9ayBrq17qmGeGbVPG22ndFJ73rT"

# Save the credentials object to file
with open("twitter_credentials.json", "w") as file:
    json.dump(credentials, file)

# Reference Material
# https://stackabuse.com/accessing-the-twitter-api-with-python/
