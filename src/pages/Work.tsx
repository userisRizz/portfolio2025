// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Calendar, Image, FileText } from "lucide-react";

// const projects = [
//   {
//     id: 1,
//     name: "E-commerce Platform",
//     // image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
//     date: "2023",
//     description: "A modern e-commerce platform built with React and TypeScript, featuring real-time inventory management and seamless checkout experience."
//   },
//   {
//     id: 2,
//     name: "Portfolio Website",
//     // image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
//     date: "2023",
//     description: "A responsive portfolio website showcasing work experience and projects, built with React and Tailwind CSS."
//   },
//   {
//     id: 3,
//     name: "Task Management App",
//     // image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
//     date: "2022",
//     description: "A collaborative task management application with real-time updates and team collaboration features."
//   }
// ];

// const Work = () => {
//   return (
//     <div className="min-h-screen py-24 px-4">
//       <div className="container mx-auto">
//         <h1 className="text-5xl font-bold mb-12 animate-fade-in">Selected Work</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project) => (
//             <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
//               <div className="relative h-48 overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.name}
//                   className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//                 />
//               </div>
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <Image className="w-5 h-5" />
//                   {project.name}
//                 </CardTitle>
//                 <CardDescription className="flex items-center gap-2">
//                   <Calendar className="w-4 h-4" />
//                   {project.date}
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex items-start gap-2">
//                   <FileText className="w-4 h-4 mt-1 flex-shrink-0" />
//                   <p className="text-muted-foreground">{project.description}</p>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;