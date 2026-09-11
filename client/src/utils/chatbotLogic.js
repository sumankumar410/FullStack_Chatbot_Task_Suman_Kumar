export function getBotResponse(userMessage) {
  if (!userMessage) {
    return "Please type a message so I can assist you.";
  }
  const msg = userMessage.toLowerCase().trim();
  if (msg.includes("help")) {
    return "I can help you explore our drone services, training programs, registration process, pricing estimates, and contact details. You can ask questions like 'What services do you offer?', 'Tell me about courses', or 'How can I register?'. Feel free to type your query anytime.";
  }
  if (msg.includes("hi") || msg.includes("hello") || msg.includes("hey") || msg.includes("good morning")) {
    return "Hello and welcome to DroneTV! We are your premier platform for professional drone solutions, aerial filming, and certified pilot training programs. How can I assist you today?";
  }
  if (msg.includes("student")) {
    return "DroneTV provides dedicated programs for students including DGCA certified drone pilot courses, mapping training, and hands-on maintenance workshops. We offer comprehensive career guidance, industrial project exposure, and placement support in the fast-growing UAV sector. Visit our Courses section to find the right training path for your goals.";
  }
  if (msg.includes("interested") || msg.includes("want service") || msg.includes("book")) {
    return "We would be glad to assist you with our specialized drone services. Please let us know the type of project you have in mind such as aerial cinematography, land survey, or infrastructure inspection. You can submit your requirements directly through our Contact or Enquiry form.";
  }
  if (msg.includes("register") || msg.includes("enroll") || msg.includes("sign up") || msg.includes("join")) {
    return "Registering for DroneTV courses and services is quick and straightforward. Navigate to our Contact page, complete the enquiry form with your contact details, and choose your preferred course or service. Our team will verify your submission and reach out within 24 hours to finalize your enrollment.";
  }
  if (msg.includes("speak") || msg.includes("talk") || msg.includes("call") || msg.includes("human") || msg.includes("person")) {
    return "You can speak directly with our team by calling +91-9876543210 or emailing us at info@dronetv.in. Alternatively, leave your contact number and query in our Enquiry form, and one of our specialists will call you back promptly.";
  }
  if (msg.includes("certificate") || msg.includes("certification") || msg.includes("dgca")) {
    return "DroneTV delivers DGCA-certified training adhering strictly to Directorate General of Civil Aviation standards in India. Our certification covers ground theory, simulator drills, and supervised flying sessions with micro and small category drones. Once completed, your license enables legal commercial drone operations across the country.";
  }
  if (msg.includes("price") || msg.includes("cost") || msg.includes("fee") || msg.includes("charges")) {
    return "Pricing depends on the specific course duration, level of certification, or scope of the aerial service required. We offer competitive rates and customized packages for both students and enterprise clients. Please reach out via our enquiry form to receive a detailed cost proposal.";
  }
  if (msg.includes("service") || msg.includes("provide") || msg.includes("offer")) {
    return "DroneTV offers comprehensive commercial drone services including Aerial Filming and Photography, Drone Survey and Mapping, Agricultural Drones, Infrastructure Inspection, Wedding and Event Coverage, and Real Estate Shoots. Each service is executed by experienced pilots utilizing state-of-the-art UAV platforms.";
  }
  if (msg.includes("course") || msg.includes("training") || msg.includes("learn") || msg.includes("program")) {
    return "Our training portfolio includes DGCA Certified Drone Pilot Training, Advanced Aerial Photography, Drone Technology and Maintenance, Agricultural Drone Operations, and Drone Mapping and Survey. Each program combines theoretical classes with extensive practical flight sessions.";
  }
  if (msg.includes("contact") || msg.includes("reach") || msg.includes("phone") || msg.includes("email") || msg.includes("address")) {
    return "You can contact DroneTV at info@dronetv.in or phone us at +91-9876543210. Our corporate headquarters is located in India, open Monday through Saturday from 9:00 AM to 6:00 PM. You can also submit an enquiry directly through our website.";
  }
  if (msg.includes("thank") || msg.includes("thanks")) {
    return "You are very welcome! If you have any additional questions about our drone services or training courses, feel free to ask anytime.";
  }
  return "I am sorry, I did not quite understand that. You can ask me about our services, courses, registration, or contact details. Or type 'help' to see what I can assist with.";
}