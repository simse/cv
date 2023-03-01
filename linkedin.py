from linkedin_api import Linkedin
import os
import json

api = Linkedin(os.getenv("LINKEDIN_USERNAME"), os.getenv("LINKEDIN_PASSWORD"))

profile = api.get_profile('simse')

print(json.dumps(profile))