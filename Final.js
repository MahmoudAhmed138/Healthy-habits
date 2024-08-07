var Q1 = localStorage.getItem("Q1");
var Q2 = localStorage.getItem("Q2");
var Q3 = localStorage.getItem("Q3");
var Q4 = localStorage.getItem("Q4");
var Q5 = localStorage.getItem("Q5");
var Q6 = localStorage.getItem("Q6");
var Q7 = localStorage.getItem("Q7");
var Q8 = localStorage.getItem("Q8");
var Q9 = localStorage.getItem("Q9");
var Q10 = localStorage.getItem("Q10");
window.onload = function(){
    var solutions = document.getElementById("solutions");

    var solQ1=document.createElement('p');
    var solQ2=document.createElement('p');
    var solQ3=document.createElement('p');
    var solQ4=document.createElement('p');
    var solQ5=document.createElement('p');
    var solQ6=document.createElement('p');
    var solQ7=document.createElement('p');
    var solQ8=document.createElement('p');
    var solQ9=document.createElement('p');
    var solQ10=document.createElement('p');
    if (Q1=="Yes") {
        var title1sol = document.createElement('strong');
        title1sol.appendChild(document.createTextNode('Employ time management techniques'))
        solQ1.appendChild(title1sol);
        solQ1.appendChild(document.createTextNode(' : Create a daily routine that works for you based on time management techniques like the Eisenhower Box. If you struggle to concentrate on work, timebox your work by setting an alarm for a short period of time and taking a break afterwards. These methods can help structure your time better, get into flow state, and make tasks seem less daunting.'));
        solutions.appendChild(solQ1);
    }
    else{
        solQ1.appendChild(document.createTextNode(''));
        solutions.appendChild(solQ1);
    }

    if (Q2>=3) {
        var title2sol = document.createElement('strong');
        title2sol.appendChild(document.createTextNode('Minimize distractions'))
        solQ2.appendChild(title2sol);
        solQ2.appendChild(document.createTextNode(' : Turning off as many notifications as possible. Setting your phone to “Do Not Disturb” will keep your phone from buzzing. If you\'re concerned about emergencies, you can program your phone to let important phone calls and text messages from certain contacts through.'));
        solutions.appendChild(solQ2);
    }
    else{
        solQ2.appendChild(document.createTextNode(''));
        solutions.appendChild(solQ2);
    }

    if (Q3=="Yes") {
        var title3sol = document.createElement('strong');
        title3sol.appendChild(document.createTextNode('Build your Self Motivation'))
        solQ3.appendChild(title3sol);
        solQ3.appendChild(document.createTextNode(' : Think about how to include that goal in your life, what you need to do to make it happen. Then put a timeframe on it (such as one week or one month).'));
        solutions.appendChild(solQ3);
    }
    else{
        solQ3.appendChild(document.createTextNode(''));
        solutions.appendChild(solQ3);
    }

    if (Q4>=3) {
        var title4sol = document.createElement('strong');
        title4sol.appendChild(document.createTextNode('Enough Sleep'))
        solQ4.appendChild(title4sol);
        solQ4.appendChild(document.createTextNode(' : Sufficient sleep is also a major player in your fitness routine. Athletes who get a higher quantity and quality of sleep may notice improved athletic performance, reaction time, accuracy, and success in team sports, and they may also have a lower risk of getting injured or sick.'));
        solutions.appendChild(solQ4);
    }
    else{
        solQ4.appendChild(document.createTextNode(''));
        solutions.appendChild(solQ4);
    }
    
    if (Q5=="Yes") {
        var title5sol = document.createElement('strong');
        title5sol.appendChild(document.createTextNode('Establish a Routine'))
        solQ5.appendChild(title5sol);
        solQ5.appendChild(document.createTextNode(' : Set Regular Meal Times: Try to eat at the same times each day to create a routine.Also try to limit the availability of unhealthy snacks in your home.'));
        solutions.appendChild(solQ5);
    }
    else{
        solQ5.appendChild(document.createTextNode(''));
        solutions.appendChild(solQ5);
    }

    if (Q6>=3) {
        var title6sol = document.createElement('strong');
        title6sol.appendChild(document.createTextNode('Try to focus on good points'))
        solQ6.appendChild(title6sol);
        solQ6.appendChild(document.createTextNode(' : Start a gratitude journal: Each day, write down three things you’re grateful for to encourage positivity and hopefulness.'));
        solutions.appendChild(solQ6);
    }
    else{
        solQ6.appendChild(document.createTextNode(''));
        solutions.appendChild(solQ6);
    }

    if (Q7=="Yes") {
        var title7sol = document.createElement('strong');
        title7sol.appendChild(document.createTextNode('Use Time Management Tools'))
        solQ7.appendChild(title7sol);
        solQ7.appendChild(document.createTextNode(' : Utilize calendars, planners, or productivity apps to schedule and track your activities. Set reminders for upcoming appointments and deadlines to stay organized.'));
        solutions.appendChild(solQ7);
    }
    else{
        solQ7.appendChild(document.createTextNode(''));
        solutions.appendChild(solQ7);
    }

    if (Q8=="Yes") {
        var title8sol = document.createElement('strong');
        title8sol.appendChild(document.createTextNode('Learn Stress management and Connect with others'))
        solQ8.appendChild(title8sol);
        solQ8.appendChild(document.createTextNode(' : Keep in touch with family and friends and share your concerns and feelings with people you trust. Connecting with others can lift our mood and help us feel less stressed.'));
        solutions.appendChild(solQ8);
    }
    else{
        solQ8.appendChild(document.createTextNode(''));
        solutions.appendChild(solQ8);
    }

    if (Q9=="Yes") {
        var title9sol = document.createElement('strong');
        title9sol.appendChild(document.createTextNode('Learn How to Prioritize'))
        solQ9.appendChild(title9sol);
        solQ9.appendChild(document.createTextNode(' : Learning how to prioritize can help you set your mind right, make it easier to deal with multiple things at once, and ultimately become more consistent.'));
        solutions.appendChild(solQ9);
    }
    else{
        solQ9.appendChild(document.createTextNode(''));
        solutions.appendChild(solQ9);
    }

    if (Q10>=3) {
        var title10sol = document.createElement('strong');
        title10sol.appendChild(document.createTextNode('Practice Acceptance'))
        solQ10.appendChild(title10sol);
        solQ10.appendChild(document.createTextNode(' : Accepting imperfections as part of the human experience can go a long way in increasing compassion toward yourself and others.It can be helpful to look shortcomings full on and accept that we are, after all, only humans.'));
        solutions.appendChild(solQ10);
    }
    else{
        solQ10.appendChild(document.createTextNode(''));
        solutions.appendChild(solQ10);
    }
    var book = document.createElement("p");
    var booklink = document.createElement("a");
    booklink.appendChild(document.createTextNode("Deep Work"));
    booklink.setAttribute("href","https://www.noor-book.com/en/ebook-%D8%A7%D9%84%D8%B9%D9%85%D9%84-%D8%A7%D9%84%D8%B9%D9%85%D9%8A%D9%82-pdf#1")
    booklink.setAttribute("id","booklink");
    book.appendChild(document.createTextNode("You can also check this book : "));
    book.appendChild(booklink);
    solutions.appendChild(book);
    
}


    

