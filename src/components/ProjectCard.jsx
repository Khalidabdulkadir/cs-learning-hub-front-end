// function ProjectCard({
//   name,
//   description,
//   githubUrl,
//   tags,
//   image,
//   demoUrl,
//   sourceCode,
//   views,
//   likes,
// }) {
//   return (
//     <div className="card h-100 shadow-sm">
//       {image && (
//         <img
//           src={image}
//           className="card-img-top"
//           alt={name}
//           style={{ height: '200px', objectFit: 'cover' }}
//         />
//       )}
//       <div className="card-body d-flex flex-column">
//         <h5 className="card-title">{name}</h5>
//         <p className="card-text flex-grow-1">{description}</p>

//         <div className="mb-3">
//           {tags?.map((tag) => (
//             <span key={tag.id} className="badge bg-secondary me-2">
//               {tag.name}
//             </span>
//           ))}
//         </div>

//         <div className="d-flex gap-2">
//           <a
//             href={githubUrl}
//             className="btn btn-outline-primary"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <i className="bi bi-github me-2"></i>
//             GitHub
//           </a>

//           {demoUrl && (
//             <a
//               href={demoUrl}
//               className="btn btn-outline-success"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <i className="bi bi-play-circle me-2"></i>
//               Demo
//             </a>
//           )}

//           {sourceCode && (
//             <a
//               href={sourceCode}
//               className="btn btn-outline-info"
//               download
//             >
//               <i className="bi bi-download me-2"></i>
//               Download
//             </a>
//           )}
//         </div>
//       </div>

//       <div className="card-footer bg-transparent border-top-0">
//         <div className="d-flex justify-content-between align-items-center">
//           <div className="text-muted small">
//             <i className="bi bi-eye me-1"></i>
//             {views}
//             <i className="bi bi-heart ms-3 me-1"></i>
//             {likes}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProjectCard;
