import ReactMarkdown from 'react-markdown'

const markdownComponents = {
  p: ({ children }) => (
    <p className="text-festival-purple/80 leading-relaxed mb-4">{children}</p>
  ),
  strong: ({ children }) => (
    <strong className="text-festival-purple font-semibold">{children}</strong>
  ),
}

export default async function AboutMarkdownView({ data, content }) {
  const values = data?.values || []

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="py-16 bg-festival-cream">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl text-festival-purple text-center mb-12 font-heading">
            {data?.title}
          </h1>
          <div className="text-xl max-w-3xl mx-auto text-center mb-16 prose prose-lg prose-purple prose-headings:font-heading prose-headings:text-festival-purple prose-p:text-festival-purple/80">
            <ReactMarkdown components={markdownComponents}>
              {content}
            </ReactMarkdown>
          </div>

          {values.length > 0 && (
            <>
              <h2 className="text-2xl text-festival-purple text-center mb-10 font-heading">
                {data?.valuesTitle}
              </h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {values.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/70 p-8 rounded-xl shadow-sm backdrop-blur-sm border border-festival-purple/10"
                  >
                    <h3 className="text-2xl text-festival-purple mb-4 font-heading">
                      {item.title}
                    </h3>
                    <p className="text-festival-purple/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  )
}
