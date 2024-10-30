import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  const [openFAQ, setOpenFAQ] = useState(Array(5).fill(false));

  const toggleFAQ = (index: any) => {
    const updatedOpenFAQ = openFAQ.map((item, i) =>
      i === index ? !item : item
    );
    setOpenFAQ(updatedOpenFAQ);
  };

  return (
    <section className="bg-gradient-to-r from-gray-400 via-gray-300 to-gray-200 text-gray-900 body-font">
      <div className="container mx-auto flex flex-col items-center px-5 py-10 md:py-20">
        <div className="relative mb-10 w-full max-w-3xl flex justify-center mx-auto">
          <Image
            className="rounded-[20px] border-4 border-black object-cover object-center max-w-xs"
            alt="hero"
            src="/NFG-Deafult-Page-Image-1920x1080.jpg"
            layout="responsive"
            width={20} 
            height={3} 
            priority
          />
        </div>

        <div className="lg:w-4/3 w-full">
          <div className="p-4">
            <h1 className="text-center text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Exploring Next.js 15
            </h1>
            <p className="text-lg md:text-2xl mb-6 text-gray-800">
             Next.js 15 is a game-changer in the world of web development,
              offering cutting-edge performance enhancements that allow
              developers to build dynamic and efficient web applications.
              With the introduction of <strong>React Server Components</strong>,
               {`   the framework optimizes rendering by sending less JavaScript
              to the client, thus enhancing loading speeds and improving
              user engagement. This feature is particularly beneficial for
              large applications, where server-side processing can
              significantly reduce the amount of data transmitted over the network.`}
            </p>
            <p className="text-lg md:text-2xl mb-6 text-gray-800">
           Another major update in Next.js 15 is its enhanced
              <strong> image optimization</strong>.   {`  The framework now supports
              the latest image formats, ensuring that images are served in the
              most efficient manner possible. By automatically selecting the
              optimal format based on the user's browser, Next.js minimizes
              loading times without sacrificing visual quality.`}
            </p>
            <p className="text-lg md:text-2xl mb-6 text-gray-800">
              The new <strong>dynamic imports</strong> feature in Next.js 15
              allows developers to load components on demand, improving the
              overall performance of web applications.
            </p>
            <h2 className="text-center text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
              Benefits of Using Next.js 15
            </h2>
            <p className="text-lg md:text-2xl">
              The latest updates include several key features organized into
              stable and experimental improvements.
            </p>

            <div className="p-4">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Stable improvements
              </h1>
              <ul className="text-lg md:text-2xl mb-6 list-disc list-inside">
                <li>Support for React 19 RC</li>
                <li>Hydration error improvements</li>
                <li>Caching improvements</li>
                <li>Updated create-next-app</li>
                <li>Bundling external packages</li>
                <li>Experimental features</li>
                <li>React compiler</li>
                <li>Partial prerendering</li>
                <li>Next/After</li>
              </ul>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                What is Next.js?
              </h1>
              <p className="text-lg md:text-2xl mb-6">
                Next.js is a versatile, open-source React framework developed by
                Vercel. It is designed to easily build fast, SEO-friendly, and
                user-friendly web apps.
              </p>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                How do I upgrade to the latest Next.js version?
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">NPM</h2>
              <code className="block text-lg md:text-2xl bg-gray-100 p-2 rounded mb-6">
                npm i next@rc react@rc react-dom@rc eslint-config-next@rc
              </code>

              <h2 className="text-2xl md:text-3xl font-semibold mt-4 mb-2">
                Yarn
              </h2>
              <code className="block text-lg md:text-2xl bg-gray-100 p-2 rounded mb-6">
                yarn add next@rc react@rc react-dom@rc eslint-config-next@rc
              </code>
            </div>
            <p className="text-lg md:text-2xl">
          <strong>Note:</strong>  {  ` The React Compiler is currently in an
              experimental phase, and its features and capabilities may evolve.
              It’s recommended that you stay updated with the latest
              developments and consider using it cautiously in your projects.`}
            </p>
          </div>

          <div className="p-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Hydration error enhancements
            </h1>
            <p className="text-lg md:text-2xl mb-6 ">
              Next.js 15 has improved the way hydration errors are displayed.
              Hydration errors happen in Next .js when there is a mismatch
              between the HTML rendered on the server and the HTML rendered in
              the client during the initial load. This mismatch can be caused by
              text, incorrect HTML nesting, and browser-specific code. With the
              new improvements, when a hydration error occurs, the source code
              of the error is displayed, along with suggestions on how to fix
              the issue.
            </p>

            <p className="text-lg md:text-2xl mb-6">
              For more details, refer to the official Next.js documentation on
              Hydration error improvements.
            </p>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Caching updates
            </h1>
            <p className="text-lg md:text-2xl mb-6">
              Caching in Next.js is essential for improving performance and
              reducing server load. The Next.js App Router was introduced with
              opinionated caching defaults, designed to provide optimal
              performance by default with the ability to opt out when necessary.
            </p>

            <p className="text-lg md:text-2xl mb-6">
              In Next.js 15, the default behavior for caching fetch requests,
              GET Route Handlers, and the Client Router Cache has been updated.
              Previously, these were cached by default, but now they are
              uncached by default. If you prefer the old behavior, you can still
              opt into caching. Note that layouts and loading states will
              continue to be cached and reused during navigation.
            </p>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Client router cache behavior in Next.js 15
            </h1>
            <p className="text-lg md:text-2xl mb-6">
              An experimental <code>staleTimes</code> flag was introduced to
              allow custom configuration of the Router Cache in Next.js 14.2.0.
              This flag still remains accessible in Next.js 15. However, we are
              changing the default behavior to a <code>staleTime</code> of 0 for
              Page segments. This means that as you navigate your app, the
              client will always reflect the latest data from the Page
              component(s) that become active as part of the navigation.
              However, there are still important behaviors that remain
              unchanged:
            </p>

            <ul className="text-lg md:text-2xl mb-6 list-disc list-inside">
              <li>
                Shared layout data avoids server re-fetching, supporting partial
                rendering.
              </li>
              <li>
                Browser back/forward navigation restores cache, including scroll
                position.
              </li>
              <li>
                <code>Loading.js</code> is cached for 5 minutes or per{" "}
                <code>staleTimes.static</code> config.
              </li>
            </ul>

            <p className="text-lg md:text-2xl mb-6">
              You can opt into the previous client router cache behavior by
              setting the following configuration:
            </p>

            <code className="block text-lg md:text-2xl bg-gray-100 p-2 rounded">
              const nextConfig = &#123;
              <br />
              &nbsp;&nbsp;experimental: &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;staleTimes: &#123; dynamic: 30 &#125;,
              <br />
              &nbsp;&nbsp;&#125;,
              <br />
              &#125;;
              <br />
              module.exports = nextConfig;
            </code>
          </div>

          <div className="p-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Create-next-app enhancements
            </h1>
            <p className="text-lg md:text-2xl mb-6">
              {`Let’s discuss the improvements in`} <code>create-next-app</code>
              . When you launch the app, it now has a new landing page and
              provides a prompt for choosing Turbopack when creating the Next
              app.
            </p>

            <p className="text-lg md:text-2xl mb-6">
              The Next.js 14 release introduced an incremental bundler called
              Turbopack, which is written in Rust and designed to optimize
              JavaScript and TypeScript. It has been integrated into Next.js to
              improve development performance.
            </p>

            <p className="text-lg md:text-2xl mb-6">
              In the Next.js 15 RC, when running the{" "}
              <code>create-next-app</code> command, a new prompt asks whether
              you would like to enable Turbopack for local development. The
              default setting is No.
            </p>

            <code className="block text-lg md:text-2xl bg-gray-100 p-2 rounded mb-6">
              ✔ Would you like to use Turbopack for next dev? … No / Yes
            </code>

            <p className="text-lg md:text-2xl mb-6">
              The <code>–turbo</code> flag can be used to activate Turbopack.
            </p>

            <code className="block text-lg md:text-2xl bg-gray-100 p-2 rounded mb-6">
              {`       npx create-next-app@rc –turbo`}
            </code>

            <p className="text-lg md:text-2xl mb-6">
              To simplify the process of getting started on a new project, a new{" "}
              <code>–empty</code> flag has been included in the CLI. This flag
              removes unnecessary files and styles, resulting in a minimal Hello
              world page.
            </p>

            <code className="block text-lg md:text-2xl bg-gray-100 p-2 rounded">
              {`      npx create-next-app@rc –empty`}
            </code>
          </div>

          <div className="p-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Improving the bundling of external libraries (stable)
            </h1>
            <p className="text-lg md:text-2xl mb-6">
              {`   Integrating external libraries can enhance an app’s initial load performance. By default, the App Router bundles external libraries, but you can exclude particular libraries using the`} <code>serverExternalPackages </code> configuration option.
                    {" "}
            </p>

            <p className="text-lg md:text-2xl mb-6">
              In the Pages Router, external libraries are not bundled by
              default. However, you can specify a list of libraries you wish to
              bundle through the <code>transpilePackages</code> option, which
              requires individual package specifications.
            </p>

            <p className="text-lg md:text-2xl mb-6">
       To streamline configurations across both the App and Pages
              routers, a new option named{" "}
              <code>bundlePagesRouterDependencies</code>{ `was introduced. This
              setting will align with the App Router’s `}default behavior of
              automatically bundling external libraries. The{" "}
              <code>serverExternalPackages</code> option remains available to
              exclude specific libraries as needed.
            </p>
          </div>

          <div className="p-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Response execution with next/after (experimental)
            </h1>
            <p className="text-lg md:text-2xl mb-6">
              When handling a user request, the server usually focuses on tasks
              directly related to generating the response. However, additional
              tasks like logging, analytics, or synchronizing with external
              systems often need to be performed.
            </p>

            <p className="text-lg md:text-2xl mb-6">
              {`            These secondary tasks should ensure the user’s response is timely. Deferring such tasks can be challenging because serverless functions typically stop execution as soon as the response is sent.
                  `}{" "}
            </p>

            <p className="text-lg md:text-2xl mb-6">
              The <code>after()</code> API, currently experimental, addresses
              this issue by allowing you to schedule tasks to run after the
              response has been streamed. This enables secondary tasks to
              execute without blocking the primary response.
            </p>

            <p className="text-lg md:text-2xl mb-6">
              To enable this feature, add <code>experimental.after</code> to
              your <code>next.config.js</code>.
            </p>

            <code className="block text-lg md:text-2xl bg-gray-100 p-2 rounded mb-6">
              const nextConfig = &#123;
              <br />
              &nbsp;&nbsp;experimental: &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;after: true,
              <br />
              &nbsp;&nbsp;&#125;,
              <br />
              &#125;;
              <br />
              module.exports = nextConfig;
            </code>

            <p className="text-lg md:text-2xl mb-6">
              Then, import the function in Server Components, Server Actions,
              Route Handlers, or Middleware.
            </p>

            <code className="block text-lg md:text-2xl bg-gray-100 p-2 rounded mb-6">
              import &#123; unstable_after as after &#125; from
              &apos;next/server&apos;;
            </code>

            <code className="block text-lg md:text-2xl bg-gray-100 p-2 rounded">
              export default function Layout(&#123; children &#125;) &#123;
              <br />
              &nbsp;&nbsp;// Secondary task.
              <br />
              &nbsp;&nbsp;after(() =&gt; &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;....
              <br />
              &nbsp;&nbsp;&#125;);
              <br />
              <br />
              &nbsp;&nbsp;// Primary task.
              <br />
              &nbsp;&nbsp;return &lt;&gt;&#123;children&#125;&lt;/&gt;;
              <br />
              &#125 ;
            </code>
          </div>

          <div className="p-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Partial Prerendering
            </h1>
            <p className="text-lg md:text-2xl mb-6">
              Partial Prerendering, or PPR, was rolled out in Next.js 14. It is
              an optimization that blends static and dynamic rendering on the
              same page.
            </p>
            <p className="text-lg md:text-2xl mb-6">
              By default, Next.js uses static rendering unless dynamic functions
              like <code>cookies()</code>, <code>headers()</code>, or uncached
              data requests are used, which switch the entire route to dynamic
              rendering. With PPR, you can wrap dynamic UI components in a{" "}
              <code>Suspense</code> boundary. When a new request is made,
              Next.js immediately serves a static HTML shell and then renders
              and streams the dynamic parts within the same HTTP request.
            </p>
            <p className="text-lg md:text-2xl mb-6">
              {`           To facilitate incremental adoption, we've added an <code>experimental_ppr</code> route config option to enable PPR for specific Layouts and Pages. Refer to the following code example.
                    `}{" "}
            </p>
            <code className="block text-lg md:text-2xl bg-gray-100 p-2 rounded mb-6">
              import &#123; Suspense &#125; from &apos;react&apos;
              <br />
              import &#123; StaticComponent, DynamicComponent &#125; from
              &apos;@/app/ui&apos;
              <br />
              <br />
              export const experimental_ppr = true
              <br />
              <br />
              export default function Page() &#123;
              <br />
              &nbsp;&nbsp;return (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;StaticComponent /&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Suspense
              fallback=&#123;...&#125;&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;DynamicComponent
              /&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Suspense&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/&gt;
              <br />
              &nbsp;&nbsp;);
              <br />
              &#125;
            </code>
            <p className="text-lg md:text-2xl mb-6">
              To use this new option, set the <code>experimental.ppr</code>{" "}
              config to <code>incremental</code> in your{" "}
              <code>next.config.js</code> file.
            </p>
            <code className="block text-lg md:text-2xl bg-gray-100 p-2 rounded mb-6">
              const nextConfig = &#123;
              <br />
              &nbsp;&nbsp;experimental: &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;ppr: &apos;incremental&apos;,
              <br />
              &nbsp;&nbsp;&#125;,
              <br />
              &#125;;
              <br />
              module.exports = nextConfig;
            </code>
            <p className="text-lg md:text-2xl">
              Once all segments have PPR enabled, setting the <code>ppr</code>{" "}
              value to <code>true</code> will be safe, enabling it for the
              entire app and all future routes.
            </p>{" "}
            <br /> <br />
            <h2 className="text-center text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
              Frequently Asked Questions (FAQs)
            </h2>
            {[
              "What are the new features in Next.js 15?",
              "How does Next.js 15 improve performance?",
              "Is Next.js 15 compatible with TypeScript?",
              "Can I deploy a Next.js 15 application on any hosting platform?",
              "What advantages does Next.js 15 offer for large applications?",
            ].map((question, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center justify-between w-full text-left font-semibold focus:outline-none text-gray-900"
                >
                  <span>{question}</span>
                  <FontAwesomeIcon
                    icon={openFAQ[index] ? faChevronUp : faChevronDown}
                  />
                </button>
                {openFAQ[index] && (
                  <p className="mt-2 bg-white text-black">
                    {index === 0 &&
                      "A1: Next.js 15 introduces several new features..."}
                    {index === 1 && "A2: Next.js 15 improves performance..."}
                    {index === 2 &&
                      "A3: Yes, Next.js 15 has built-in TypeScript support..."}
                    {index === 3 &&
                      "A4: Yes, you can deploy Next.js 15 applications..."}
                    {index === 4 &&
                      "A5: Next.js 15 offers significant advantages..."}
                  </p>
                )}
              </div>
            ))}{" "}
            <br />
            <br />
            <div className="overflow-x-auto">
  <h2 className="text-center text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
    Next.js Version Release Table
  </h2>
  <table className="w-full bg-white border border-gray-300">
    <thead>
      <tr>
        <th className="border px-2 md:px-4 py-2">Version</th>
        <th className="border px-2 md:px-4 py-2">Release Date</th>
        <th className="border px-2 md:px-4 py-2">Key Features</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border px-2 md:px-4 py-2">Next.js 1</td>
        <td className="border px-2 md:px-4 py-2">October 2016</td>
        <td className="border px-2 md:px-4 py-2">
          Initial release, server-side rendering (SSR) support
        </td>
      </tr>
      <tr>
        <td className="border px-2 md:px-4 py-2">Next.js 2</td>
        <td className="border px-2 md:px-4 py-2">March 2017</td>
        <td className="border px-2 md:px-4 py-2">
          Static export support, automatic code splitting
        </td>
      </tr>
      <tr>
        <td className="border px-2 md:px-4 py-2">Next.js 3</td>
        <td className="border px-2 md:px-4 py-2">June 2017</td>
        <td className="border px-2 md:px-4 py-2">
          Dynamic imports, customizable routing
        </td>
      </tr>
      <tr>
        <td className="border px-2 md:px-4 py-2">Next.js 4</td>
        <td className="border px-2 md:px-4 py-2">October 2017</td>
        <td className="border px-2 md:px-4 py-2">
          React 16 support, improved error handling
        </td>
      </tr>
      <tr>
        <td className="border px-2 md:px-4 py-2">Next.js 5</td>
        <td className="border px-2 md:px-4 py-2">February 2018</td>
        <td className="border px-2 md:px-4 py-2">
          Webpack 4, multi-zones support
        </td>
      </tr>
      <tr>
        <td className="border px-2 md:px-4 py-2">Next.js 6</td>
        <td className="border px-2 md:px-4 py-2">June 2018</td>
        <td className="border px-2 md:px-4 py-2">
          Improved `next/link`, custom `App` component
        </td>
      </tr>
      <tr>
        <td className="border px-2 md:px-4 py-2">Next.js 7</td>
        <td className="border px-2 md:px-4 py-2">October 2018</td>
        <td className="border px-2 md:px-4 py-2">
          Built-in CSS support, AMP support
        </td>
      </tr>
      <tr>
        <td className="border px-2 md:px-4 py-2">Next.js 8</td>
        <td className="border px-2 md:px-4 py-2">February 2019</td>
        <td className="border px-2 md:px-4 py-2">
          Serverless deployment, API routes
        </td>
      </tr>
      <tr>
        <td className="border px-2 md:px-4 py-2">Next.js 9</td>
        <td className="border px-2 md:px-4 py-2">July 2019</td>
        <td className="border px-2 md:px-4 py-2">
          API routes, automatic static optimization
        </td>
      </tr>
      <tr>
        <td className="border px-2 md:px-4 py-2">Next.js 10</td>
        <td className="border px-2 md:px-4 py-2">October 2020</td>
        <td className="border px-2 md:px-4 py-2">
          Image component, internationalized routing
        </td>
      </tr>
      <tr>
        <td className="border px-2 md:px-4 py-2">Next.js 11</td>
        <td className="border px-2 md:px-4 py-2">June 2021</td>
        <td className="border px-2 md:px-4 py-2">
          Conformance, Script component, faster refresh
        </td>
      </tr>
      <tr>
        <td className="border px-2 md:px-4 py-2">Next.js 12</td>
        <td className="border px-2 md:px-4 py-2">October 2021</td>
        <td className="border px-2 md:px-4 py-2">
          Middleware, React 18 support, Rust compiler
        </td>
      </tr>
      <tr>
        <td className="border px-2 md:px-4 py-2">Next.js 13</td>
        <td className="border px-2 md:px-4 py-2">October 2022</td>
        <td className="border px-2 md:px-4 py-2">
          App Router, React Server Components, improved image optimization
        </td>
      </tr>
      <tr>
        <td className="border px-2 md:px-4 py-2">Next.js 14</td>
        <td className="border px-2 md:px-4 py-2">March 2023</td>
        <td className="border px-2 md:px-4 py-2">
          Improved TypeScript support, new plugins system
        </td>
      </tr>
      <tr>
        <td className="border px-2 md:px-4 py-2">Next.js 15</td>
        <td className="border px-2 md:px-4 py-2">October 2023</td>
        <td className="border px-2 md:px-4 py-2">
          Enhanced image optimization, dynamic imports, new App Router
        </td>
      </tr>
    </tbody>
  </table>
</div>

          </div>
        </div>
      </div>
    </section>
  );
}
