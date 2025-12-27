"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type Issue = {
  id: number;
  type: string;
  title: string;
  status: "Open" | "In Progress" | "Closed";
};

export default function DashboardPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  // 🔐 Protect route
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/register");
      return;
    }
    setMounted(true);
  }, [router]);

  if (!mounted) return null;

  const [issues, setIssues] = useState<Issue[]>([
    {
      id: 1,
      type: "Cloud Security",
      title: "S3 bucket public access",
      status: "Open",
    },
    {
      id: 2,
      type: "VAPT",
      title: "SQL Injection risk",
      status: "In Progress",
    },
    {
      id: 3,
      type: "Red Team Assessment",
      title: "Credential dumping test",
      status: "Closed",
    },
  ]);

  const [title, setTitle] = useState("");
  const [type, setType] = useState("Cloud Security");

  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  function addIssue() {
    if (!title.trim()) return;

    setIssues((prev) => [
      ...prev,
      {
        id: Date.now(),
        type,
        title,
        status: "Open",
      },
    ]);

    setTitle("");
  }

  function updateStatus(id: number) {
    setIssues((prev) =>
      prev.map((i) =>
        i.id === id
          ? {
              ...i,
              status:
                i.status === "Open"
                  ? "In Progress"
                  : i.status === "In Progress"
                  ? "Closed"
                  : "Open",
            }
          : i
      )
    );
  }

  function removeIssue(id: number) {
    setIssues((prev) => prev.filter((i) => i.id !== id));
  }

  const filtered = issues.filter((i) => {
    return (
      i.title.toLowerCase().includes(search.toLowerCase()) &&
      (filterType === "All" || i.type === filterType) &&
      (filterStatus === "All" || i.status === filterStatus)
    );
  });

  return (
    <section className="dashboard">
      <h1 className="dash-title">Dashboard</h1>
      <p className="dash-sub">Track and manage your security issues</p>

      {/* CREATE ISSUE */}
      <div className="issue-form">
        <h3>Create Issue</h3>

        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option>Cloud Security</option>
          <option>VAPT</option>
          <option>Red Team Assessment</option>
        </select>

        <input
          placeholder="Issue title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={addIssue}>Add Issue</button>
      </div>

      {/* FILTERS */}
      <div className="issue-filters">
        <input
          placeholder="Search issue..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <option>All</option>
          <option>Cloud Security</option>
          <option>VAPT</option>
          <option>Red Team Assessment</option>
        </select>

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option>All</option>
          <option>Open</option>
          <option>In Progress</option>
          <option>Closed</option>
        </select>
      </div>

      {/* ISSUE LIST */}
      <div className="issue-list">
        {filtered.length === 0 && (
          <p style={{ opacity: 0.6 }}>No issues found</p>
        )}

        {filtered.map((i) => (
          <div key={i.id} className="issue-card">
            <div>
              <h4>{i.title}</h4>
              <span className="issue-type">{i.type}</span>
            </div>

            <div className="issue-actions">
              <button
                className={`status ${i.status.replace(" ", "-")}`}
                onClick={() => updateStatus(i.id)}
              >
                {i.status}
              </button>

              <button className="del-btn" onClick={() => removeIssue(i.id)}>
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
