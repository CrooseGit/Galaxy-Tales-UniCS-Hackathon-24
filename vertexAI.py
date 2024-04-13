import dotenv
import vertexai
from vertexai.generative_models import GenerativeModel, ChatSession

# TODO(developer): Update and un-comment below lines
project_id = "unicshackathon2024"
location = "europe-west2"
vertexai.init(project=project_id, location=location)

model = GenerativeModel("gemini-1.0-pro")
chat = model.start_chat()


def get_chat_response(chat: ChatSession, prompt: str) -> str:
    response = chat.send_message(prompt)
    return response.text

def get_kids_article(title, article):
    # Input: article text
    prompt = ("Generate a kids version of the Title and only the title of this article: " + title + "\n\n" +article)
    kids_title = get_chat_response(chat, prompt)
    prompt = ("Generate a kids version of the article of this article: " + title + "\n\n" + article)
    kids_article = get_chat_response(chat, prompt)
    return kids_title, kids_article

def get_college_article(title,article):
    prompt = ("Generate a college level version of the Title and only the title of this article: " + title + "\n\n" + article)
    college_title = get_chat_response(chat, prompt)
    prompt = ("Generate a college level version of the article of this article: " + title + "\n\n" + article)
    college_article = get_chat_response(chat, prompt)
    return college_title, college_article

def get_adult_article(title,article):
    prompt = ("Generate a summarised version of the Title and only the title of this article: " + title + "\n\n" + article)
    adults_title = get_chat_response(chat, prompt)
    prompt = ("Generate a summarised version of the article of this article: " + title + "\n\n" + article)
    adults_article = get_chat_response(chat, prompt)
    return adults_title, adults_article

#article = 'COLORADO SPRINGS — Astroscale is moving into the next phase of an inspection mission as its spacecraft approaches a derelict upper stage in low Earth orbit.\nAstroscale announced April 11 that its Active Debris Removal by Astroscale-Japan (ADRAS-J) spacecraft, launched Feb. 18, had moved to within several hundred kilometers of an upper stage from an H-2A launch in 2009 left in low Earth orbit and was now relying on its own sensors to continue its approach.\nThe mission milestone was a switch from absolute navigation, where the spacecraft was maneuvered by ground controllers based on knowledge of its position as well as that of the upper stage, to “Angles-Only Navigation,” where ADRAS-J detected the upper stage using onboard cameras and calculated its relative position.\nThe milestone is a major step in testing rendezvous and proximity operations (RPO) that is a major purpose of the mission. “The big issue here is we’ve completed the rendezvous phase,” said Chris Blackerby, chief operating officer of Astroscale, in an interview during the 39th Space Symposium. “What we’re moving into now is starting the proximity operations phase.”\nADRAS-J will continue its approach to the upper stage using relative navigation, with plans to come within dozens of meters of the stage. That approach will be incremental, he said, measuring its rotation rate and looking for any signs of degradation of the stage. ADRAS-J will use its thrusters to match the rotation of the stage and approach one end of the stage. Astroscale expects to complete the mission by the end of May.\n“The goal here is proving out those core capabilities for on-orbit servicing but also as a precursor for the second phase,” he said. That second phase would be to send a spacecraft to capture and deorbit the stage.\nThe Japanese government, which awarded Astroscale a contract for ADRAS-J in 2020, has yet to select a company to perform that second stage, although it has given Astroscale a study contract for it. Blackerby said he expected JAXA to announce a contract soon, which would allow the mission to fly in the next two years.\nWhile ADRAS-J and a potential second phase mission are part of the Japanese space agency JAXA’s Commercial Removal of Debris Demonstration, the technologies being demonstrated have broader applicability, he said. “We’re not just going up there to grab the debris. We’re going up there to prove that we can do this approach and capture, and can then do a whole host of things: refuel, repair, relocate, remove.”\nADRAS-J is one of several projects in development by Astroscale, based on Tokyo and with offices in several countries, including the United Kingdom and United States. Among them are ELSA-M, a spacecraft that will dock with a OneWeb satellite and remove it from orbit; Life Extension In-Orbit, or LEXI, which will dock with GEO satellites to provide maneuvering and attitude control; and a prototype of a refueling spacecraft being developed under a U.S. Space Force contract.\nTechnologies being demonstrated on ADRAS-J will be used on missions being developed by Astroscale’s U.K. and U.S. businesses, within export control restrictions. “The whole point of having a global company is being able to share best practices, and to be able to share resources and technologies among the team so that they can improve those missions,” he said.\nBlackerby, who just completed a term as president of the satellite servicing trade group CONFERS, said he has been pleased by progress in some of the countries Astroscale operates in to address regulatory uncertainty for the field, such as changes in mission licensing regimes in Japan and the five-year deorbit rule adopted by the U.S. Federal Communications Commission in 2022.\nCONFERS now has 82 members, which he sees as a sign of the growing interest in satellite servicing. However, he argued that will require continued government support in terms of regulations as well as missions like the JAXA-sponsored ADRAS-J.\n“What’s going to keep all of those companies alive and keep this whole industry moving? It’s going to be interest and involvement from government agencies,” he said. “We’re seeing the interest in terms of both shaping regulations and policies and putting money in budgets to start proving this out.”'
