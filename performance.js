`const N_SIZE = 500000;

//Look at the times to "fill" the array. Why is there so much difference in the 2 approaches?
const array1 = [];
const t0 = performance.now();
for (let i = 0; i < N_SIZE; i++) {
 array1.push("🔥");
}
const t1 = performance.now();

console.log("first array took " + (t1 - t0) + " milliseconds.");

const array2 = new Array(N_SIZE);
const t2 = performance.now();
for (let i = 0; i < N_SIZE; i++) {
 array2[i] = ("🔥");
}
const t3 = performance.now();

console.log("second array took " + (t3 - t2) + " milliseconds.");`

// Once you figured out why this is, when is a good time to use this approach to make this certain optimization?





Architecture(csr vs SSR) CDN 
rendering - nextjs(isr) (seo)
state management (react query for quering (stale time) and jotai for state)
styling
accesibilty and internaltiolization
Routing(public private routes)

components and modules
authentication (token based or session based)
authorization(premium features)
data modelling (schema)
api design 
optimization
    - cdn(aseetsn bundle)
    - split bundle initially load skeleton hydrate
    - other lazyload on scroll 
    - list virtualization
    - browser specific builds(older needs polyffils)
    - images preloaded
    - prefetch some imp p0 libraries
 
    
streaming
buffering 
bandwidth 
resolution(4k)
frame rate
codec(soft compreess and decompress mie\edia h.264 Av)
latency(live stream)
subtitles
captions
playback control
view frames on hover
pip mode
DRM

video formats 
webm mp4

this also helps in switch the network quality asa chunks
1080p
mutiple small chunks
1
2
3

720p

what is HLS(http live streaming) protocol

seekbar
generate thimbnails - nextflix
spritesheet (all smallimages) - yt





const task = {
    id: "UUID",
    title: "task-title",
    description: "task-description",
    type: "epic | story | task | sub-task",
    status: "to-do | in-progress | in-review | completed",
    child_tasks: [],
    created_by: "user-id",
    assigned_to: "user_id"
};
  
const createTask = (id, data, belongsTo) => {
    // create a new task
    tasks.byIds[id] = data;
  
    // update the task list
    tasks.allIds.push(id);
  
    // update the parent of the task
    tasks.byIds[belongsTo].child_tasks.push(id);
}
  
const getTasksByStatus = (status) => {
    return tasks.allIds.map((e) => {
      if(tasks.byIds[e].status === status){
        return tasks.byIds[e];
      };
    });
};
  
const updateTaskStatus = (id, status) => {
    tasks.byIds[id].status = status;
  }