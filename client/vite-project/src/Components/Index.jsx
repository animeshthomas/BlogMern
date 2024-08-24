const Index = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="text-center">
        <h1 className="display-4">Welcome to the BlogApp!</h1>
        <p className="lead mt-3">
          Explore the latest posts, share your thoughts, and join the community.
        </p>
        <div className="mt-4">
          <a href="/blogs" className="btn btn-primary btn-lg mx-2">View Blogs</a>
          <a href="/create-post" className="btn btn-success btn-lg mx-2">Create New Post</a>
        </div>
      </div>
    </div>
  );
}

export default Index;
