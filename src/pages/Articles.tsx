import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const Articles = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            All Articles
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            Explore our complete collection of articles covering wellness, travel, creativity, and personal growth.
            Find inspiration and practical insights for living a more intentional and fulfilling life.
          </p>
        </div>

        {/* Articles Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div key={article.id} className={`animate-slide-up stagger-${Math.min(index % 6 + 1, 6)}`}>
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Articles;
