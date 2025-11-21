import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';

export function Hero({ onNavigate }: { onNavigate: (page: string) => void }) {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 relative grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-left space-y-8"
                >
                    <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm text-zinc-400 backdrop-blur-md">
                        <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
                        Available for new projects
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                        Putera Dewangga <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Electronics & IoT Engineer</span>
                    </h1>

                    <p className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed">
                        Specializing in embedded systems, industrial IoT solutions, and advanced control systems. Building reliable firmware for real-world applications.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-12"
                            onClick={() => onNavigate('projects')}
                        >
                            View Projects <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                        <button className="flex items-center border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white rounded-full px-8 h-12 bg-transparent"
                            onClick={() => onNavigate('contact')}
                        >
                            Contact Me
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    {/* Abstract Tech Visualization */}
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
                        <div className="relative h-full w-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 overflow-hidden shadow-2xl">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

                            {/* Mock Code/Terminal */}
                            <div className="font-mono text-sm text-zinc-400 space-y-2">
                                <div className="flex items-center gap-2 text-zinc-500 border-b border-zinc-800 pb-4 mb-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                                    <span className="ml-2 text-xs">firmware_v2.cpp</span>
                                </div>
                                <p><span className="text-purple-400">void</span> <span className="text-blue-400">setup</span>() {'{'}</p>
                                <p className="pl-4"><span className="text-blue-400">Serial</span>.begin(<span className="text-green-400">115200</span>);</p>
                                <p className="pl-4">IMU.<span className="text-yellow-400">init</span>(0x68);</p>
                                <p className="pl-4"><span className="text-zinc-500">{`// Initializing Kalman Filter`}</span></p>
                                <p className="pl-4">kalman.<span className="text-yellow-400">setAngle</span>(0);</p>
                                <p className="pl-4">MQTT.<span className="text-yellow-400">connect</span>(<span className="text-green-400">{"wss://iot-broker"}</span>);</p>
                                <p>{'}'}</p>
                                <br />
                                <p><span className="text-purple-400">void</span> <span className="text-blue-400">loop</span>() {'{'}</p>
                                <p className="pl-4"><span className="text-zinc-500">{`// Real-time sensor fusion`}</span></p>
                                <p className="pl-4"><span className="text-blue-400">float</span> pitch = IMU.<span className="text-yellow-400">getPitch</span>();</p>
                                <p className="pl-4"><span className="text-blue-400">if</span> (pitch &gt; <span className="text-green-400">45.0</span>) {'{'}</p>
                                <p className="pl-8">Emergency.<span className="text-red-400">trigger</span>();</p>
                                <p className="pl-4">{'}'}</p>
                                <p>{'}'}</p>
                                <br />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
export default Hero;