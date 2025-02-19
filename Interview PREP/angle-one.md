Round 1: JavaScript + Web (Expected duration: 60mins, Actual duration: 90mins in my case)


Introductions (5mins)
3-4 Js Output based questions (complex questions mostly around "this" context, call, apply, arrow fns)
Currying problem (slight variation, don't recall exactly)
Array.reduce polyfill and follow up problem statement on the same.
write a fn to call api and abort after certain time interval. (similar to implementing autosuggest)
Post interview discussions (10mins)


Round 2: UI Tech / Machine Coding (Duration: 60mins)
Implement inheritance in JavaScript (prototype chain) and questions around the same.
Machine coding- Similar to building a login form (free to choose any framework)

Round 3: Hiring Manager (Expected duration: 60mins, Actual duration: 90mins in my case)

Introductions.
Resume / Project related discussions.
Discussions around SDLC, observability, debuggability, performance etc.
Follow up questions on specific scenarios.
General behavioural / cultural discussions.



------------------------------------------
. Introductions
	•	Self-Introduction Example:
“Hi, I’m Johar Batta, a full-stack engineer with over four years of experience specializing in building scalable and high-performance web applications. I have a strong background in frontend and backend technologies, particularly React, Next.js, Node.js, and Django. Currently, I am leading multiple projects at Wakefit, including migrating the product catalog to MongoDB for better API performance and improving website performance through frontend optimizations. Beyond coding, I enjoy mentoring junior developers, improving team processes, and exploring emerging tech stacks to enhance development efficiency.”
	•	Tips:
	•	Keep it brief (1-2 mins)
	•	Highlight your expertise, recent work, and leadership responsibilities
	•	Show enthusiasm and confidence

2. Resume / Project Related Discussions

Common Questions & Best Answers
	1.	Q: Can you walk me through your most impactful project?
A:
“One of my most impactful projects was migrating our product catalog at Wakefit to MongoDB, which significantly improved API response times. We transitioned from a relational database to a NoSQL structure, optimizing queries and reducing read latency by 40%. Additionally, we used caching strategies with Redis and CDN integration to further enhance performance. This directly contributed to a better customer experience and reduced server load, leading to cost savings. The entire process required close collaboration with backend engineers, thorough performance testing, and incremental rollouts to minimize downtime.”
	2.	Q: Tell me about a challenge you faced in a project and how you solved it.
A:
“During the Next.js migration at Wakefit, we faced a critical challenge with Google Core Web Vitals metrics, particularly TBT (Total Blocking Time) and CLS (Cumulative Layout Shift). The home page loading time was slow due to large render-blocking scripts. I optimized this by implementing lazy loading, dynamic imports, and reducing unnecessary re-renders using React memoization. We also refactored the Webpack bundle to eliminate redundant packages. These optimizations resulted in a 40% faster load time and significantly improved SEO rankings, increasing organic traffic.”



3. Discussions around SDLC, Observability, Debuggability, Performance

Key Topics & Answers
	1.	Q: What is your approach to observability in production systems?
A:
“Observability is crucial to understanding system behavior in production. I primarily use tools like CloudWatch, New Relic, and Prometheus to monitor logs, metrics, and traces. At Wakefit, we implemented structured logging using Winston in Node.js, which made debugging API issues easier. Additionally, we set up real-time alerts for high API latency and error rates, ensuring we could act proactively rather than reactively.”
	2.	Q: How do you debug performance issues in an application?
A:
“I follow a structured approach:
	•	First, I analyze browser dev tools (Chrome DevTools, Lighthouse) to identify frontend bottlenecks.
	•	For backend issues, I use tools like New Relic or CloudWatch to check API response times.
	•	I profile database queries to eliminate slow joins and redundant calls.
	•	Caching strategies (Redis, CDN) are reviewed to optimize data fetching.
	•	If it’s a JS-heavy app, I optimize bundle size by using tree shaking, lazy loading, and reducing dependencies.”
This approach helped reduce Wakefit’s home page load time by 40%.”
	3.	Q: What are some strategies for improving web app performance?
A:
“Some strategies I use include:
	•	Frontend Optimizations: Code splitting, lazy loading, CDN caching, and reducing DOM complexity.
	•	Backend Optimizations: Efficient database queries (Indexing, Caching), optimizing API responses with pagination, and reducing redundant computations.
	•	Infra-Level Optimizations: Load balancing (Auto Scaling Groups), caching layers (Redis, Varnish), and using efficient CI/CD pipelines to minimize deployment impact.”_


4. Follow-up Questions on Specific Scenarios
	1.	Q: How would you scale an application handling millions of user requests per second?
A:
“Scaling involves a multi-layered approach:
	•	Database Scaling: Implement sharding, read replicas, and optimize indexing.
	•	Caching: Use Redis or Memcached to store frequently accessed data.
	•	Load Balancing: Utilize AWS ELB with Auto Scaling Groups.
	•	Async Processing: Offload heavy tasks to Kafka queues to prevent API slowdowns.
	•	Frontend Optimization: Use CDN for assets and minimize heavy computations.”_
	2.	Q: Have you ever optimized SQL queries? What techniques did you use?
A:
“Yes, I optimized SQL queries for our analytics dashboard at Wakefit.
	•	Reduced Joins: Flattened tables and used materialized views for faster reads.
	•	Added Indexes: Created composite indexes on frequently queried columns.
	•	Batch Processing: Used bulk inserts and pagination instead of fetching large datasets.
	•	Query Optimization: Rewrote inefficient subqueries using Common Table Expressions (CTEs) to enhance performance.”_

5. General Behavioral / Cultural Discussions

Common Behavioral Questions & Answers
	1.	Q: Tell me about a time you had a conflict with a teammate and how you resolved it.
A:
“Once, a teammate and I had a disagreement over the tech stack for a new feature. While he preferred Django for backend APIs, I advocated for Node.js due to performance concerns. Instead of escalating, I suggested we conduct a performance benchmark comparing response times, scalability, and ease of integration. After testing, we found Node.js performed better in our use case, and my teammate appreciated the data-driven decision. This experience reinforced the importance of collaboration and objective decision-making.”
	2.	Q: How do you handle tight deadlines and high-pressure situations?
A:
“I break down tasks into smaller milestones and prioritize high-impact ones. At Wakefit, during a major sale event, we had only two weeks to integrate a secondary SMS provider (Sinch). I ensured the team focused on core functionality first, conducted parallel testing, and implemented rollback strategies. This approach helped us deliver within the deadline without compromising quality.”
	3.	Q: Why do you want to join Angel One?
A:
“Angel One excites me because of its emphasis on innovation in the fintech space. Given my experience in building scalable e-commerce solutions, I believe my expertise in performance optimization, observability, and full-stack development aligns well with your goals. Additionally, I am eager to work in a high-impact role where I can contribute to both technical improvements and mentoring junior developers.”