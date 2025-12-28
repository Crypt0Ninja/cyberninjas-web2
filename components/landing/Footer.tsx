"use client";

import { Mail, FileText, Shield } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img
                                src="/landingpage-logo.png"
                                alt="CyberNinjas"
                                className="h-10 w-auto"
                            />
                            <span className="text-xl font-bold">
                                Cyber<span className="gradient-text">Ninjas</span>
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Професионална AI промпт библиотека и образователна платформа.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Линкове</h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="/dashboard"
                                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                                >
                                    Платформа
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/dashboard/courses"
                                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                                >
                                    Академии
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/dashboard/resources"
                                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                                >
                                    Ресурси
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Информация</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-gray-400 text-sm">
                                <Shield className="h-4 w-4" />
                                Поверителност
                            </li>
                            <li className="flex items-center gap-2 text-gray-400 text-sm">
                                <FileText className="h-4 w-4" />
                                Условия
                            </li>
                            <li className="flex items-center gap-2 text-gray-400 text-sm">
                                <Mail className="h-4 w-4" />
                                Контакт
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-white/10">
                    <p className="text-center text-gray-500 text-sm">
                        © {currentYear} CyberNinjas. Всички права запазени.
                    </p>
                </div>
            </div>
        </footer>
    );
}
